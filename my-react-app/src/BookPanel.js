import React from 'react';
import axios from 'axios';

function BookPanel() {

    const [bookName, setBookName] = React.useState('');

    function fetchRecords(){
        axios.get('http://localhost:8085/WebApplicationHotelReservation/rest/hotel/hotels')
        .then( (response) => {
            // handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            // process received data
            window.alert("Response recieved from server = " + data);
        });
    }

    function postRecords(){
        // create a json object to send to server
        // example
        const value = {
            //bookName: someValue,
            //author: 'some author'
        };

        axios.post('PATH', value)
        .then( (response) => {
            // handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            // process received data
            window.alert("Response recieved from server = " + data);
        });
    }



    function fetchBookRecords(){
        axios.get('http://localhost:8080/books')
        .then( (response) => {
            // handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            window.alert("Response recieved from server = " + data);
        });
    }


    function saveBook(){
        const value = {
            name: bookName,
            //author: 'some author',
            // etc.
        };

        axios.post('http://localhost:8080/book', value)
        .then( (response) => {
            // handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            window.alert("Response recieved from server = " + data);
        });
    }


    function messageHandler(){
        fetchRecords();
    }


    function displayBookHandler(){
        fetchBookRecords();
    }

    function saveBookHandler(){
        saveBook();
    }

    return (
        <div>
            <input type="text" placeholder='Book Name' value ={bookName} onChange ={e => setBookName(e.target.value) }/>
            <br/>
            <button onClick={saveBookHandler}>Save Book Details</button> 
            <br/>
            <h3>Show Books:</h3>
            <button onClick={displayBookHandler}>Display Books</button> 
            <h3>Show message from Java EE Server:</h3>
            <button onClick={messageHandler}>Display Message</button> 
        </div>
    );

}

export default BookPanel;
