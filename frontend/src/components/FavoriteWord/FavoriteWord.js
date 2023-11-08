import CheckBox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"


const FavoriteWord = () => {
    return( 
        <>
            <CheckBox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}>
            </CheckBox>
        </>
    )
}

export default FavoriteWord