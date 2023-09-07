import { icons } from "../../assets/index"
import * as HomeStyle from "./homestyle"

const Home = () => {

    return(
        <>
            <HomeStyle.Main>
                <HomeStyle.Logo>
                    <HomeStyle.LogoImg src = {icons.logo} />
                    <HomeStyle.LogoTitle>
                        Findr
                    </HomeStyle.LogoTitle>
                </HomeStyle.Logo>
            </HomeStyle.Main>
        </>
    )
}

export default Home