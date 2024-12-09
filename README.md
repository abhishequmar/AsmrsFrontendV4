# Archaeological Site Management and Research System Frontend

## Overview
This repository contains the frontend codebase for the Archaeological Site Management and Research System. The frontend is built using Angular 17, designed to provide a user-friendly interface for managing archaeological data, scheduling, and site analysis.

## Features
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Role-Based Navigation**: Custom dashboards for Admins, Archaeologists, Researchers, Visitors, and Conservators.
- **Interactive Components**: Cards and modals for managing sites, artifacts, tours, and more.
- **Real-Time Updates**: Integration with backend APIs for live data fetching and updates.

## Project Structure

### Key Directories
```plaintext
src/app
├── Cards
│   ├── artifact
│   ├── Editable
│   ├── notification
│   ├── publicationcard
│   ├── sitecard
│   └── visittourcard
├── footer
├── Models
├── Navbar
├── Pages
│   ├── auth
│   ├── home
│   ├── profile
│   ├── publications
│   ├── site
│   ├── sites
│   └── tours
├── Services

```

### Highlights
1. **Cards**
   - Modular components to display data such as artifacts, sites, publications, and visitor tours.
2. **Pages**
   - Organized sections for authentication, user profiles, publications, and site exploration.
3. **Services**
   - Handles interaction with backend APIs for data retrieval and submission.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo-name/archaeological-site-frontend.git
cd archaeological-site-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
ng serve
```
