# Medicine Delivery App

**Attention**: The backend part is hosted on a free Render server plan, so the initial launch of the application may take up to 50 seconds!

## How run it

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Overview:

This web application allows users to order medicine delivery from various drug stores. The application has three complexity levels: base, middle, and advanced. Completing tasks with higher complexity increases the chance of admission to the school.

## Description:

The Medicine Delivery app consists of two main pages:

- The Shops page
- The Shopping Cart page

## Requirements:

- **Important**: Instructions on how to run the application are provided in this readme.md file.
- Source code is uploaded to GitHub/BitBucket/GitLab, and the link is shared.
- The application is hosted in any suitable manner, and the URL is provided for access.
- Front-end development can be done in JavaScript with or without any framework, using any preferred design style.
- Back-end development can be done in NodeJS with or without any framework.
- Any relational or non-relational database can be used.

### Base Level:

**Shops Page:**

- Users can choose a drug store and add medicines to the cart (data fetched from the database).

**Shopping Cart Page:**

- Users can view all added products, remove some, or change quantities.
- Users can input email, phone number, and address.
- Orders are saved in the database upon clicking the "Submit" button.

### Middle Level:

**Shops Page:**

- All functionalities from the base level.
- Ability to sort medicines by price and/or date added.
- Ability to mark medicines as favorites, which are displayed first when sorting.

**Shopping Cart Page:**

- All functionalities from the base level.
- Cart data is saved in local storage.

### Advanced Level:

**Shops Page:**

- All functionalities from the middle level.

**Shopping Cart Page:**

- All functionalities from the middle level.
- Integration of Google Maps.
- Users can choose their address using a pin on the map or enter an address manually.
- Display the shop from where medicines were ordered on the map.
- \*(Extra) Show route from shop to user’s address with approximate time.
- \*(Extra) Implement CAPTCHA validation after clicking the "Create Order" button.

## Additional Ideas:

**Orders History Page:**

- Users can find their orders using email, phone number, or order ID.
