# People Manager

**People Manager** is a Single Page Application (SPA) built with Angular 8 designed to manage a list of people. It allows users to:

- View a list of people with their details.
- Edit a person's name and email.
- Delete a person from the list with a confirmation prompt.

This application connects to a REST API to handle data operations. For local development, a mock API can be set up using `json-server`.

## Features

- **List View**: Displays all people in a table with options to edit or delete each entry.
- **Edit View**: Update a person's name and email.
- **Delete View**: Confirm and remove a person from the list.
- Responsive and user-friendly interface.

## Technologies Used

- **Angular 8**: Core framework for building the SPA.
- **TypeScript**: Programming language used with Angular.
- **HTML5 & CSS3**: For structuring and styling the UI.
- **json-server** (optional): Simulates a REST API for development purposes.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v10.x or v12.x recommended) and **npm**. Download from nodejs.org.

- **Angular CLI** (v8.3.29) installed globally:

  ```bash
  npm install -g @angular/cli@8.3.29
  ```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/people-manager.git
cd people-manager
```

### 2. Install Dependencies

Install the required npm packages:

```bash
npm install
```

### 3. Set Up Mock API (Optional)

To run the app locally with a mock API:

- Install `json-server` globally:

  ```bash
  npm install -g json-server
  ```

- Create a `db.json` file in the project root with sample data:

  ```json
  {
    "people": [
      { "id": 1, "name": "John Doe", "email": "john@example.com" },
      { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
    ]
  }
  ```

- Start the mock server:

  ```bash
  json-server --watch db.json
  ```

  The API will run at `http://localhost:3000/people`.

### 4. Configure API URL

In `src/app/people.service.ts`, set the API endpoint:

- For the mock API:

  ```typescript
  private apiUrl = 'http://localhost:3000/people';
  ```

- For a real API, replace with the actual URL.

### 5. Run the Application

Start the Angular development server:

```bash
ng serve
```

Navigate to `http://localhost:4200` in your browser.

## Usage

- **List View**: See all people in a table. Each row has "Edit" and "Delete" buttons.
- **Edit View**: Click "Edit" to update a person’s name and email, then save or cancel.
- **Delete View**: Click "Delete" to confirm and remove a person.

## Project Structure

Key directories and files:

- `src/app/people-list/`: Component for displaying the people list.
- `src/app/edit-person/`: Component for editing a person’s details.
- `src/app/delete-person/`: Component for deleting a person.
- `src/app/people.service.ts`: Service handling API calls.
- `src/app/app-routing.module.ts`: Defines navigation routes.

## Notes

- This application does not include an "Add People" feature, as it was not part of the original requirements.
- Ensure your API (mock or real) supports CORS if running locally.

## License

1. This project is licensed under the MIT License.