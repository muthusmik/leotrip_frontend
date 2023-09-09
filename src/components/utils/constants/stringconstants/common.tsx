export const today = new Date();
export const maxDate = new Date();
maxDate.setMonth(today.getMonth() + 6);
export const dateOfRetrun = new Date();
dateOfRetrun.setDate(today.getDate() + 1);

export const FOOTER_SECTION = [
    {
        title: "About Leo Trip",
        items: ["About Us", "Contact Us", "Sitemap", "Offers", "Leo Trip on Mobile"]
    },
    {
        title: "Info",
        items: ["T & C", "Privacy Policy", "FAQ", "Insurance Partner", "User Agreement"]
    },
    {
        title: "Global Sites",
        items: ["India", "Singapore", "Malaysia", "Indonesia", "Colombia"]
    }
];

export const ORGANIZATION_ADDRESS =
    <>Smik Systems Pvt Ltd,<br />
        Saravanampatti,<br />
        Coimbatore - 641008.</>

export const ORGANIZATION_PHONENUMBER =
    <>
        +91 9988774455.<br />4587 - 458763.
    </>

export const autoCompleteData = [
    "Asparagus",
    "Beetroot",
    "Broccoli",
    "Cabbage",
    "Carrot",
    "Cauliflower",
    "Celery",
    "Corn",
    "Eggplant",
    "Lettuce",
    "Mushroom",
    "Onion",
    "Parsnip",
    "Pea",
    "Potato",
    "Pumpkin",
    "Radish",
    "Spinach",
    "Tomato",
    "Turnip",
];

export const wordings = {
    'alert': {
        'adultOne': "Minimum 1 adult is required",
        'maxAdult': "You have reached the maximum adult count of 9.",
        'notAllow': "Not allowed",
        'maxChild': "Maximum 6 children are allowed",
        'maxInfant': "You have reached the maximum room count of 6."
    },
    'flight': {
        'modifySearch': "Search",
        'flightPlaceHolder': "Enter City or Airport",
        'departureDatePlaceHolder': "Select Date",
        'departureDateLabel': "Departure",
        'returnDatePlaceHolder': "Select Return Date",
        'returnDateLabel': "Return",
        'fromLabel': "From",
        'toLabel': 'To',
        'travellers': 'Travellers',
        'class': "Class",
        'adults': "Adults",
        'children': "Children",
        'infant': 'Infant',
        'apply': "Apply",
        'searchFlight': 'Search Flight'
    },
    'hotel': {
        'location': "Location",
        'locationPlaceHolder': 'Where you want to stay',
        'checkIn': 'Check-In',
        'checkInPlacholder': 'Select Check-In Date',
        'checkOut': 'Check-Out',
        'checkOutPlacholder': 'Select Check-Out Date',
        'searchHotel': 'Search Hotel',
        'guests': 'Guests',
        'rooms': 'Rooms',
        'adults': 'Adults',
        'child': 'Child',
        'children': 'Children',
        'notes': 'Please provide right number of children along with their right age for best options and prices.',
        'errorNoteForChildAge': 'Please provide ages for all children.',
        'apply': 'Apply'
    },
    'bus': {
        'fromLabel': "From",
        'toLabel': 'To',
        'placeholderSource': 'Enter Source',
        'placeholderDestination': 'Enter Destination',
        'travelDate': 'Travel Date',
        'travelDatePlaceholder': 'Select your Date',
        'modifySearch': 'Search',
        'searchBus': 'Search Bus'
    },
    'car': {
        'tripSelectionLabel': 'Select Trip Type',
        'fromLabel': "From",
        'toLabel': 'To',
        'autoPlaceHolderPickup': 'Pickup Location',
        'autoPlaceHolderDrop': 'Drop Location',
        'autoPlaceHolderAirport': 'Airport Name',
        'dateDepLabel': 'Departure',
        'dateDepPlaceHolder': 'Select Pickup Date',
        'dateReturnLabel': 'Return',
        'dateReturnPlaceHolder': 'Select Return Date',
        'timePickupLabel': 'Pickup-Time',
        'timeDropLabel': "Drop Time",
        'searchCar': 'Search Car',
        'modifySearch': 'Search'
    }
}