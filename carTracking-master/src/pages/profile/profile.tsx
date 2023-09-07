import * as profileStyle from './profile.styled'
import ProfileComponent from '../../components/profile/profile'

const Profile = () =>{
    return(
        <>
            <profileStyle.Main>
                <profileStyle.CloseButton>

                </profileStyle.CloseButton>
                <profileStyle.MainProfile>
                    <ProfileComponent/>
                </profileStyle.MainProfile>
            </profileStyle.Main>
        </>
    )
}

export default Profile