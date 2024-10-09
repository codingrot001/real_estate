# Real Estate Website

## Description

This project is a real estate website designed to help users buy, sell, and rent properties. The application features a user-friendly interface for browsing listings, detailed property views, and a robust backend to manage listings and user accounts. Built with modern web technologies, it provides an efficient and responsive experience.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Features

- User authentication (sign up, login)
- Property listings with filtering options
- Detailed property views
- User account management
- Responsive design with Tailwind CSS
- API for property management

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/codingrot001/real_estate.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd real_estate
   ```

3. **Install dependencies for both frontend and backend**:

   **For the frontend**:

   ```bash
   cd property_agency
   npm install
   ```

   **For the backend**:

   ```bash
   cd property_agency_backend
   npm install
   ```

4. **Create a `.env` file** in the `server` directory and add your MongoDB connection string:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Usage

To run the application, start the backend server and the frontend application:

1. **Start the backend server**:

   ```bash
   cd server
   npm start
   ```

2. **Start the frontend application**:

   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

Here are some of the key API endpoints available in the backend:

- **GET /api/properties**: Retrieve all properties
- **GET /api/properties/:id**: Retrieve a specific property by ID
- **POST /api/properties**: Create a new property (requires authentication)
- **PUT /api/properties/:id**: Update a property (requires authentication)
- **DELETE /api/properties/:id**: Delete a property (requires authentication)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors and resources that helped in the development of this project.
- Inspired by various open-source real estate platforms.

## Contact

For any questions or suggestions, feel free to reach out:

- **Emmanuel**: [codingrot001@gmail.com](mailto:codingrot001@gmail.com)
