import * as yup from 'yup';
import { string } from 'yup/lib/locale';

const schema = yup.object().shape({
    item:  yup.string(),
    person: yup.string(),
    numOfGuests: yup.string()
    
})

export default schema;