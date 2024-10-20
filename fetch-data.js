// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetch Data Using try-catch
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Convert response to JSON
        const users = await response.json();

        // Clear the Loading Message
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to user's name
            userList.appendChild(listItem); // Append the <li> to the userList
        });
        // Append the user list to dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
        console.error('Error fetching user data:', error); // Log the error to the console
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);