import { useDispatch } from 'react-redux'
import { 
    setName,
    setCategoryId,
    setContent,
    setImage,
    setType,
    resetNewsDetails 
} from './NewsDetailsStore';
import Axios from 'axios';

const dispatch = useDispatch()

export default LOAD_NEWS_DETAILS = (id) => {
    Axios.get('/news/' + id).then(
        response => response.json()
    ).then(response => {
        dispatch(setName(response.name));
        dispatch(setCategoryId(response.categoryId));
        dispatch(setContent(response.content));
        dispatch(setImage(response.image));
        dispatch(setType(response.type));
    });
}

export default RESET_NEWS_DETAILS = () => {
    dispatch(resetNewsDetails());
}