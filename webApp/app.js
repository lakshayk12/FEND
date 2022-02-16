// Client side code

const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

postData('/add', { answer: 42 });

const getData = async (url = '') => {
    console.log(data);
    const response = await fetch(url);

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

getData("/fetch")
    .then((data) => {
        postData('add', { animal: data.animal });
    });


// Async POST
const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url = '') => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const allData = await request.json()
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

// Chain your async functions to post an animal then GET the resulting data
const postGet = () => {
    postData('/animal', { fav: 'lion' })
        .then((data) => {
            retrieveData('all');
        })
}

// Call the chained function
postGet();
