#include <String.h>
#include <TinyGPS++.h>
#include "ThingSpeak.h"

#define sensorPin A0

TinyGPSPlus gps;
//ignition pins
int ignition =  3;
const int potign = A1;

//alarm
int alarm =  2;

// Value for storing water level
int val = 0;
float val1 =0;

String WIFI_SSID = "Redmi 10";// WIFI NAME
String WIFI_PASS = "MenmyGod"; // WIFI PASSWORD
String API = "DBVVXP0CM0BXL2S9";// Write API KEY
String HOST = "api.thingspeak.com";
String PORT = "80";
int countTrueCommand;
int countTimeCommand; 
boolean found = false;
char buffer[256];
String messager;

//init write and read
char read3[5];
char write5[5];

String write1;
String write2;
float write4;
//String write5;
String write6;
String write7;
String write8;


void setup() {
  //intialize ignition
  pinMode(ignition, OUTPUT);
  pinMode(potign, INPUT);
  //init alarm
  pinMode(alarm, OUTPUT);
  digitalWrite(alarm, LOW);
  //serial monitors
  Serial.begin(9600);
  Serial1.begin(9600); //gps
  Serial3.begin(115200);//wifi

 // intialize wifi module
  sendCommand("AT",5,"OK");
  sendCommand("AT+CWMODE=1",5,"OK");
  sendCommand("AT+CWJAP=\""+ WIFI_SSID +"\",\""+ WIFI_PASS +"\"",20,"OK");



}
void loop() {

//read values from field 5 and 6
messager = "GET /channels/2224740/feeds.json?results=1";
sendCommand("AT+CIPMUX=1",5,"OK");
  sendCommand("AT+CIPSTART=0,\"TCP\",\""+HOST+"\","+PORT,15,"OK");
 // sendCommand("AT+CIPSTO=10",5,"OK");
  sendCommand("AT+CIPSEND=0,"+String(messager.length()+4),4,">");
  Serial3.println(messager);
  Serial.println("Starting to read...");
  
  sendCommand("AT+CIPCLOSE=0",5,"OK");
  
  unsigned long currentMillis = millis();
bool si = false;      // bool si serve a prendere solo i caratteri dentro [ ], in modo tale da non appesantire troppo il buffer
int count = 0;
while((millis() - currentMillis) < 10000){
    if(Serial3.available()){
      char ch;
      ch=Serial3.read();
        if(ch == '['){
          si = true;
           }
        if(ch == ']'){
          si = false;
        }
      if(si == true){
      buffer[count] = ch;
      count++;
     // Serial.print(ch);
      }
     }
}
       
       buffer[count] = "\0";
       if(count > 256){
        Serial.println("Unsufficient space on the buffer (200 char)");
       }
    
    Serial.println("Reading done!");
    
    Serial.println("Buffer:");
    for (int i = 0; i < count; i++){
      Serial.print(buffer[i]);
    }
    Serial.print("\n");
    
    char* posField3 = strstr(buffer, "\"field3\":\"");
if (posField3) {
    char* endPosField3 = strstr(posField3, "\",");
    if (endPosField3) {
        int len = endPosField3 - (posField3 + 10); // 10 is the length of "\"field3\":\""
        char fieldValue[5];
        strncpy(read3, posField3 + 10, len);
        fieldValue[len] = '\0';
        
        Serial.print("field3 value: ");
        Serial.println(read3);
         
    }
}

char* posField5 = strstr(buffer, "\"field5\":\"");
if (posField5) {
    char* endPosField5 = strstr(posField5, "\",");
    if (endPosField5) {
        int len = endPosField5 - (posField5 + 10); // 10 is the length of "\"field5\":\""
        char fieldValue[5];
        strncpy(write5, posField5 + 10, len);
        fieldValue[len] = '\0';
        
        Serial.print("field5 value: ");
        Serial.println(write5);
       
    }
}
//Serial.flush();

//code for alarm
if(read3=="1"){
  for (int i=0; i < 10; i++){   
      digitalWrite(alarm, HIGH);
      delay(1500);
      digitalWrite(alarm, LOW);
      delay(1500);
  }  
  read3=[0];
}      



//code for fuel sensor
val = analogRead(sensorPin);
  
  if (val >= 0 && val <= 500) {
    val1 = (float(val) / 500) * 12.5;
  } else if (val >= 500 && val <= 600) {
    val1 = (float(val) / 600) * 25;
  } else if (val >= 600 && val <= 630) {
    val1 = (float(val) / 630) * 37.5;
  } else if (val >= 630 && val <= 650) {
    val1 = (float(val) / 650) * 50;
  } else if (val >= 650 && val <= 660) {
    val1 = (float(val) / 660) * 62.5;
  } else if (val >= 660 && val <= 665) {
    val1 = (float(val) / 665) * 75;
  } else if (val >= 670 && val <= 670) {
    val1 = (float(val) / 670) * 87.5;
  } else if (val >= 680 && val <= 675) {
    val1 = (float(val) / 675) * 100;
  }
  else if (val >= 675) {
    val1 = (100);
  }
  
  Serial.print("Water level: ");
  Serial.print(val1, 2); // Print with 2 decimal places
  Serial.println("%");
  val1=write4;

//code for ignition

String write5;
 int potval = analogRead(potign);
  Serial.println(potval);
if (potval > 780 && potval <= 1023) {
  digitalWrite(ignition, HIGH);
  write5="1";
  }

else if (potval  < 100){
  digitalWrite(ignition, LOW);
  write5="0";
}

//GPS code
while (Serial2.available() > 0) {
    if (gps.encode(Serial2.read())) {
      if (gps.location.isValid()) {
        // DATE
      String dateStr = String(gps.date.day()) + "/" + String(gps.date.month()) + "/" + String(gps.date.year());
      Serial.print("DATE: ");
      Serial.print(dateStr);
      Serial.print("  ");
      write7=dateStr;
      
      // Time
      String timeStr = String(gps.time.hour()) + ":" + String(gps.time.minute()) + ":" + String(gps.time.second());
      Serial.print("TIME: ");
      Serial.print(timeStr);
      Serial.print("   ");
      write8=timeStr;

      // Coordinate generation
      Serial.print("Latitude= ");
      Serial.print(gps.location.lat(), 6);
      write1=gps.location.lat();
      Serial.print(" Longitude= ");
      Serial.println(gps.location.lng(), 6);
      write2=gps.location.lng();

      Serial.print("Speed in km/h = ");
      Serial.println(gps.speed.kmph());
      write6=gps.speed.kmph();

      }
    }
  }
 
 //Code to update backend
 String getData="GET /update?api_key="+ API+"&field1="+write1+"&field2="+write2+"&field3="+read3+"&field4="+write4+"&field5="+write5+"&field6="+write6+"&field7="+write7+"&field8="+write8;
 //String getData=" GET /setignition?id=64e807c734c47f4c9fc391e0&value=5"+write5;
 sendCommand("AT+CIPMUX=1",5,"OK");
 sendCommand("AT+CIPSTART=0,\"TCP\",\""+ HOST +"\","+ PORT,15,"OK");
 sendCommand("AT+CIPSEND=0," +String(getData.length()+4),4,">");
 Serial3.println(getData);
 Serial.println(getData);
 //delay(1500);
 countTrueCommand++;
 sendCommand("AT+CIPCLOSE=0",5,"OK");
 //delay(10000);

}
void sendCommand(String command, int maxTime, char readReplay[]) {
  Serial.print(countTrueCommand);
  Serial.print(". at command => ");
  Serial.print(command);
  Serial.print(" ");
  while(countTimeCommand < (maxTime*1))
  {
    Serial3.println(command);//at+cipsend
    if(Serial3.find(readReplay))//ok
    {
      found = true;
      break;
    }
    countTimeCommand++;
  } 
  if(found == true)
  {
    Serial.println("OK");
    countTrueCommand++;
    countTimeCommand = 0;
  }
  if(found == false)
  {
    Serial.println("Fail");
    countTrueCommand = 0;
    countTimeCommand = 0;
  } 
  found = false;
 }