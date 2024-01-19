# SMS API using Orange API

This repository contains the source code for an SMS API implementation using the Orange API. The SMS API enables developers to send text messages programmatically through the Orange telecommunication network.
Express.js is used to create a RESTful API for communication . 
Axios is used for making HTTP requests to the Orange API.

## Features
- Send SMS messages to specified phone numbers.
- Integration with Orange API for reliable and efficient message delivery.
- Easy-to-use functions for developers to incorporate SMS functionality into their applications.

## Usage
1. Obtain API credentials from [Orange Developer portal](https://developer.orange.com/apis/sms/overview).
2. Integrate the SMS API into your application using the provided functions.
3. Send SMS messages to recipients with a few lines of code.

## Getting Started

1. Clone the repository:
    ```bash
     git clone https://github.com/Bino26/sms-api-orange.git
    ```

2. Install the dependencies :

    ```bash
    npm install
    ```

 To run this project, you will need to create an .env file and add the following environment variables to your .env file .
 
3. Copy the `.env.example` file and rename it to `.env` and replace characters by your own credentials:
     ```bash
    cp .env.example .env
    ```
4. Launch the server :

    ```bash
    npm start 
    ```
5. Obtain API credentials from [Orange Developer portal](https://developer.orange.com/apis/sms/overview)
      
## Contributing
We welcome contributions! If you find a bug or have a feature request, please open an issue. Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
