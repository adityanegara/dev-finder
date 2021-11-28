import moment from "moment";

const convertIsoDate = (date) =>{
    const test =  date.split("T")[0];
    return moment(test, 'YYYY.MM.DD').format('MMMM Do YYYY');
}

export default convertIsoDate;