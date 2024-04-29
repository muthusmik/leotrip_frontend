import Sleeper from "../../../assets/images/sleeper.png";
import Seater from "../../../assets/images/seater.png";
import Engine from "../../../assets/icons/engine.png";

export const travels = [
  {
    name: "KRS Travels",
    departureDate: "30 - oct",
    departureTime: "21:00",
    arrivalDate: "31 - oct",
    arrivalTime: "06:30",
    sleeperDetails: "A/C Sleeper (2+1)",
    travelHours: "2 h 10 m",
    price: "₹ 1,210",
    seatsLeft: 26,
    windowsSeatsLeft: 9,
    rating: 4.8,
    totalRating: 964,
    departureCity: "Chennai",
    arrivalCity: "Coimbatore",
    offerPrice: "₹ 1260",
  },
  {
    name: "Shatabdi Express",
    departureDate: "30 - oct",
    departureTime: "10:00 AM",
    arrivalDate: "30 - oct",
    arrivalTime: "12:00 PM",
    travelHours: "2 h 10 m",
    price: "₹1200",
    seatsLeft: 15,
    windowsSeatsLeft: 7,
    rating: 4.3,
    totalRating: 80,
    sleeperDetails: "A/C Sleeper (2+1)",
    departureCity: "Mumbai",
    arrivalCity: "Bangalore",
    offerPrice: "₹2500",
  },
  {
    name: "Duronto Express",
    departureDate: "30 - oct",
    departureTime: "12:00 PM",
    arrivalDate: "30 - oct",
    arrivalTime: "2:00 PM",
    travelHours: "2 h 10 m",
    price: "₹1000",
    seatsLeft: 8,
    windowsSeatsLeft: 4,
    rating: 4.8,
    totalRating: 120,
    sleeperDetails: "A/C Sleeper (2+1)",
    departureCity: "Bangalore",
    arrivalCity: "Chennai",
    offerPrice: "₹2500",
  },
  {
    name: "Garib Rath Express",
    departureDate: "30 - oct",
    departureTime: "8:00 AM",
    arrivalDate: "30 - oct",
    arrivalTime: "10:00 AM",
    sleeperDetails: "Sleeper (3+2)",
    travelHours: "2 h 10 m",
    price: "₹800",
    seatsLeft: 10,
    windowsSeatsLeft: 5,
    rating: 4.2,
    totalRating: 90,
    departureCity: "Kolkata",
    arrivalCity: "Delhi",
    offerPrice: "₹2500",
  },
  {
    name: "Rajdhani Express",
    departureDate: "30 - oct",
    departureTime: "10:00 AM",
    arrivalDate: "30 - oct",
    arrivalTime: "12:00 PM",
    travelHours: "2 h 10 m",
    price: "₹1500",
    seatsLeft: 15,
    windowsSeatsLeft: 7,
    rating: 4.6,
    totalRating: 95,
    sleeperDetails: "A/C Sleeper (2+1)",
    departureCity: "Delhi",
    arrivalCity: "Mumbai",
    offerPrice: "₹2500",
  },
  {
    name: "Shatabdi Express",
    departureDate: "30 - oct",
    departureTime: "12:00 PM",
    arrivalDate: "30 - oct",
    arrivalTime: "2:00 PM",
    travelHours: "2 h 10 m",
    price: "₹1300",
    seatsLeft: 8,
    windowsSeatsLeft: 4,
    rating: 4.4,
    totalRating: 85,
    sleeperDetails: "A/C Sleeper (2+1)",
    departureCity: "Mumbai",
    arrivalCity: "Bangalore",
    offerPrice: "₹2500",
  },
  {
    name: "Duronto Express",
    departureDate: "30 - oct",
    departureTime: "2:00 PM",
    arrivalDate: "30 - oct",
    arrivalTime: "4:00 PM",
    travelHours: "2 h 10 m",
    price: "₹1100",
    seatsLeft: 12,
    windowsSeatsLeft: 6,
    rating: 4.7,
    totalRating: 100,
    sleeperDetails: "A/C Sleeper (2+1)",
    departureCity: "Bangalore",
    arrivalCity: "Chennai",
    offerPrice: "₹2500",
  },
  {
    name: "Garib Rath Express",
    departureDate: "30 - oct",
    departureTime: "4:00 PM",
    arrivalDate: "30 - oct",
    arrivalTime: "6:00 PM",
    travelHours: "2 h 10 m",
    price: "₹750",
    seatsLeft: 20,
    windowsSeatsLeft: 10,
    rating: 4.0,
    totalRating: 80,
    sleeperDetails: "Sleeper (3+2)",
    departureCity: "Chennai",
    arrivalCity: "Hyderabad",
    offerPrice: "₹2500",
  },
  {
    name: "Rajdhani Express",
    departureDate: "30 - oct",
    departureTime: "6:00 PM",
    arrivalDate: "30 - oct",
    arrivalTime: "8:00 PM",
    travelHours: "2 h 10 m",
    price: "₹1600",
    seatsLeft: 18,
    windowsSeatsLeft: 9,
    rating: 4.8,
    totalRating: 110,
    sleeperDetails: "A/C Sleeper (2+1)",
    departureCity: "Hyderabad",
    arrivalCity: "Pune",
    offerPrice: "₹2500",
  },
  {
    name: "Shatabdi Express",
    departureDate: "30 - oct",
    departureTime: "8:00 PM",
    arrivalDate: "30 - oct",
    arrivalTime: "10:00 PM",
    travelHours: "2 h 10 m",
    price: "₹1400",
    seatsLeft: 14,
    windowsSeatsLeft: 7,
    rating: 4.3,
    totalRating: 90,
    sleeperDetails: "A/C Sleeper (2+1)",
    departureCity: "Pune",
    arrivalCity: "Ahmedabad",
    offerPrice: "₹2500",
  },
];

export const pickup = [
  "21:00 Koyambedu, koyambedu",
  "21:00 MMDA, mmda",
  "21:00 Vadapalani, vadapalani",
  "21:00 Ashok Pillar, ashok pillar",
  "21:00 Ekkattuthangal, ekkatuthangal",
  "21:00Alandur, alandur",
  "21:00 Shanthi Petrol Bunk, shanthi perol bunk",
  "21:00 Meenambakkam Airport, meenambakkam airport",
  "21:00Pallavaram, pallavaram",
  "21:00 Chrompet, chrompet",
  "21:00 Tambaram, tamparam",
  "21:00 Koyambedu, koyambedu",
  "21:00 MMDA, mmda",
  "21:00 Vadapalani, vadapalani",
  "21:00 Ashok Pillar, ashok pillar",
  "21:00 Ekkattuthangal, ekkatuthangal",
  "21:00 Alandur, alandur",
  "21:00 Shanthi Petrol Bunk, shanthi perol bunk",
  "21:00 Meenambakkam Airport, meenambakkam airport",
  "21:00 Pallavaram, pallavaram",
  "21:00 Chrompet, chrompet",
  "21:00 Tambaram, tamparam",
  "21:00 Koyambedu, koyambedu",
  "21:00 MMDA, mmda",
  "21:00 Vadapalani, vadapalani",
  "21:00 Ashok Pillar, ashok pillar",
  "21:00 Ekkattuthangal, ekkatuthangal",
  "21:00 Alandur, alandur",
  "21:00 Shanthi Petrol Bunk, shanthi perol bunk",
  "21:00 Meenambakkam Airport, meenambakkam airport",
  "21:00 Pallavaram, pallavaram",
  "21:00 Chrompet, chrompet",
  "21:00 Tambaram, tamparam",
];

export const droppoint = [
  "21:00 Meenambakkam Airport, meenambakkam airport",
  "21:00 Pallavaram, pallavaram",
  "21:00 Chrompet, chrompet",
  "21:00 Tambaram, tamparam",
  "21:00 Koyambedu, koyambedu",
  "21:00 Ekkattuthangal, ekkatuthangal",
  "21:00 Alandur, alandur",
  "21:00 Shanthi Petrol Bunk, shanthi perol bunk",
  "21:00 MMDA, mmda",
  "21:00 Vadapalani, vadapalani",
  "21:00 Ashok Pillar, ashok pillar",
  "21:00 Koyambedu, koyambedu",
  "21:00 Ekkattuthangal, ekkatuthangal",
  "21:00 Alandur, alandur",
  "21:00 Shanthi Petrol Bunk, shanthi perol bunk",
  "21:00 MMDA, mmda",
  "21:00 Vadapalani",
];

export const reviews = [
  { stars: 5, percentage: 50 },
  { stars: 4, percentage: 20 },
  { stars: 3, percentage: 15 },
  { stars: 2, percentage: 8 },
  { stars: 1, percentage: 7 },
];

export const comment = [
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Gowtham",
    date: "21-10-2023",
    status: "Good",
    rating: 4.8,
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Alice",
    date: "15-09-2023",
    status: "Excellent",
    rating: 4.4,
  },
];

export const images = [
  require("../../../assets/images/colorful_houses_buildings_road_hd_travel.jpg"),
  require("../../../assets/images/double-taker.jpg"),
  require("../../../assets/images/banner.png"),
  require("../../../assets/images/ai-generated.png"),
  require("../../../assets/images/architecture.jpg"),
  require("../../../assets/images/pixmo.jpg"),
];

export const data = [
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Gowtham",
    date: "21-10-2023",
    status: "Good",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Alice",
    date: "15-09-2023",
    status: "Excellent",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Eve",
    date: "28-07-2023",
    status: "Satisfactory",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Charlie",
    date: "11-11-2023",
    status: "Poor",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "David",
    date: "07-05-2023",
    status: "Good",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Fiona",
    date: "19-04-2023",
    status: "Excellent",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Grace",
    date: "23-08-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Helen",
    date: "05-02-2023",
    status: "Satisfactory",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Ivy",
    date: "30-06-2023",
    status: "Poor",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
  {
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    name: "Bob",
    date: "03-12-2023",
    status: "Fair",
    review: "4.3",
  },
];

export const reviewButton = [
  { label: "AC", count: 67, color: "green" },
  { label: "Seat comfort", count: 84, color: "green" },
  { label: "Live tracking", count: 38, color: "green" },
  { label: "Cleanliness", count: 34, color: "green" },
  { label: "Staff behavior", count: 34, color: "green" },
  { label: " Rest stop hygiene", count: 23, color: "green" },
];

export const badReview = [
  { label: "AC", count: 67, color: "red" },
  { label: "Puntuality", count: 98, color: "red" },
  { label: "Puntuality", count: 98, color: "red" },
  { label: "Staff behavior", count: 34, color: "red" },
  { label: " Rest stop hygiene", count: 23, color: "red" },
];

export const travelsdetails = [
  {
    name: "KRS Travels",
    departureDate: "30 - oct",
    departureTime: "21:00",
    arrivalDate: "31 - oct",
    arrivalTime: "06:30",
    sleeperDetails: "A/C Sleeper (2+1)",
    travelHours: "2 h 10 m",
    price: "₹ 1,210",
    seatsLeft: 26,
    windowsSeatsLeft: 9,
    rating: 4.8,
    totalRating: 964,
    departureCity: "Chennai",
    arrivalCity: "Coimbatore",
    offerPrice: "₹ 1260",
  },
];

export const couponData = [
  {
    code: "SAVE10",
    offer: "Get 10% off on your purchase!",
  },
  {
    code: "SAVE11",
    offer: "Get 10% off on your purchase!",
  },
  {
    code: "SAVE12",
    offer: "Get 10% off on your purchase!",
  },
  {
    code: "SAVE13",
    offer: "Get 10% off on your purchase!",
  },
  {
    code: "SAVE15",
    offer: "Get 10% off on your purchase!",
  },
  {
    code: "SAVE14",
    offer: "Get 10% off on your purchase!",
  },
];

export const countries = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "American Samoa", code: "+1-684" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Anguilla", code: "+1-264" },
  { name: "Antarctica", code: null },
  { name: "Antigua and Barbuda", code: "+1-268" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Aruba", code: "+297" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahamas", code: "+1-242" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Barbados", code: "+1-246" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bermuda", code: "+1-441" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Bosnia and Herzegovina", code: "+387" },
  { name: "Botswana", code: "+267" },
  { name: "Brazil", code: "+55" },
  { name: "British Indian Ocean Territory", code: "+246" },
  { name: "British Virgin Islands", code: "+1-284" },
  { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Cape Verde", code: "+238" },
  { name: "Cayman Islands", code: "+1-345" },
  { name: "Central African Republic", code: "+236" },
  { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Christmas Island", code: "+61" },
  { name: "Cocos Islands", code: "+61" },
  { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" },
  { name: "Cook Islands", code: "+682" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Curacao", code: "+599" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Democratic Republic of the Congo", code: "+243" },
  { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" },
  { name: "Dominica", code: "+1-767" },
  { name: "Dominican Republic", code: "+1-809, 1-829, 1-849" },
  { name: "East Timor", code: "+670" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" },
  { name: "Eritrea", code: "+291" },
  { name: "Estonia", code: "+372" },
  { name: "Ethiopia", code: "+251" },
  { name: "Falkland Islands", code: "+500" },
  { name: "Faroe Islands", code: "+298" },
  { name: "Fiji", code: "+679" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "French Polynesia", code: "+689" },
  { name: "Gabon", code: "+241" },
  { name: "Gambia", code: "+220" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Gibraltar", code: "+350" },
  { name: "Greece", code: "+30" },
  { name: "Greenland", code: "+299" },
  { name: "Grenada", code: "+1-473" },
  { name: "Guam", code: "+1-671" },
  { name: "Guatemala", code: "+502" },
  { name: "Guernsey", code: "+44-1481" },
  { name: "Guinea", code: "+224" },
  { name: "Guinea-Bissau", code: "+245" },
  { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" },
  { name: "Honduras", code: "+504" },
  { name: "Hong Kong", code: "+852" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Isle of Man", code: "+44-1624" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Ivory Coast", code: "+225" },
  { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" },
  { name: "Jersey", code: "+44-1534" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kiribati", code: "+686" },
  { name: "Kosovo", code: "+383" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Laos", code: "+856" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Lesotho", code: "+266" },
  { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Macau", code: "+853" },
  { name: "Macedonia", code: "+389" },
  { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" },
  { name: "Marshall Islands", code: "+692" },
  { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" },
  { name: "Mayotte", code: "+262" },
  { name: "Mexico", code: "+52" },
  { name: "Micronesia", code: "+691" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Montserrat", code: "+1-664" },
  { name: "Morocco", code: "+212" },
  { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" },
  { name: "Namibia", code: "+264" },
  { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "Netherlands Antilles", code: "+599" },
  { name: "New Caledonia", code: "+687" },
  { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" },
  { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" },
  { name: "Niue", code: "+683" },
  { name: "North Korea", code: "+850" },
  { name: "Northern Mariana Islands", code: "+1-670" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palau", code: "+680" },
  { name: "Palestine", code: "+970" },
  { name: "Panama", code: "+507" },
  { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" },
  { name: "Peru", code: "+51" },
  { name: "Philippines", code: "+63" },
  { name: "Pitcairn", code: "+64" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Puerto Rico", code: "+1-787, 1-939" },
  { name: "Qatar", code: "+974" },
  { name: "Republic of the Congo", code: "+242" },
  { name: "Reunion", code: "+262" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Rwanda", code: "+250" },
  { name: "Saint Barthelemy", code: "+590" },
  { name: "Saint Helena", code: "+290" },
  { name: "Saint Kitts and Nevis", code: "+1-869" },
  { name: "Saint Lucia", code: "+1-758" },
  { name: "Saint Martin", code: "+590" },
  { name: "Saint Pierre and Miquelon", code: "+508" },
  { name: "Saint Vincent and the Grenadines", code: "+1-784" },
  { name: "Samoa", code: "+685" },
  { name: "San Marino", code: "+378" },
  { name: "Sao Tome and Principe", code: "+239" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Singapore", code: "+65" },
  { name: "Sint Maarten", code: "+1-721" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" },
  { name: "Suriname", code: "+597" },
  { name: "Svalbard and Jan Mayen", code: "+47" },
  { name: "Swaziland", code: "+268" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Tajikistan", code: "+992" },
  { name: "Tanzania", code: "+255" },
  { name: "Thailand", code: "+66" },
  { name: "Togo", code: "+228" },
  { name: "Tokelau", code: "+690" },
  { name: "Tonga", code: "+676" },
  { name: "Trinidad and Tobago", code: "+1-868" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Turks and Caicos Islands", code: "+1-649" },
  { name: "Tuvalu", code: "+688" },
  { name: "U.S. Virgin Islands", code: "+1-340" },
  { name: "Uganda", code: "+256" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vanuatu", code: "+678" },
  { name: "Vatican", code: "+379" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Wallis and Futuna", code: "+681" },
  { name: "Western Sahara", code: "+212" },
  { name: "Yemen", code: "+967" },
  { name: "Zambia", code: "+260" },
  { name: "Zimbabwe", code: "+263" },
];

export const insurance = [
  {
    imageUrl: require("../../../assets/images/Acko.png").default,
    altText: "Image 1",
  },
  {
    imageUrl: require("../../../assets/images/Acko.png").default,
    altText: "Image 2",
  },
  {
    imageUrl: require("../../../assets/images/Acko.png").default,
    altText: "Image 3",
  },
];

const SeatButton = ({ seatNumber, setSelectedSeat, image }: any) => (
  <button onClick={() => setSelectedSeat(seatNumber)}>
    <img src={image} alt={seatNumber.toString()} className="h-6 w-6" />
  </button>
);

export const Seating = ({ setSelectedSeat }: any) => [
  <SeatButton
    key={1}
    seatNumber={1}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
  <SeatButton
    key={2}
    seatNumber={2}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
  <SeatButton
    key={3}
    seatNumber={3}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
  <SeatButton
    key={4}
    seatNumber={4}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
  <SeatButton
    key={5}
    seatNumber={5}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
  <SeatButton
    key={6}
    seatNumber={6}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
  <SeatButton
    key={7}
    seatNumber={7}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
  <SeatButton
    key={8}
    seatNumber={8}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
  <SeatButton
    key={9}
    seatNumber={9}
    setSelectedSeat={setSelectedSeat}
    image={Seater}
  />,
];

export const Sleep = ({ setSelectedSeat }: any) => [
  <SeatButton
    key={1}
    seatNumber={1}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={2}
    seatNumber={2}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={3}
    seatNumber={3}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={4}
    seatNumber={4}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={5}
    seatNumber={5}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={6}
    seatNumber={6}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
];

export const Sleeplower = ({ setSelectedSeat }: any) => [
  <SeatButton
    key={7}
    seatNumber={7}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={8}
    seatNumber={8}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={9}
    seatNumber={9}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={10}
    seatNumber={10}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={11}
    seatNumber={11}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={12}
    seatNumber={12}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
];

export const Sleeplowerleft = ({ setSelectedSeat }: any) => [
  <SeatButton
    key={13}
    seatNumber={13}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={14}
    seatNumber={14}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={15}
    seatNumber={15}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={16}
    seatNumber={16}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={17}
    seatNumber={17}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={18}
    seatNumber={18}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
];

export const Sleeplowerright = ({ setSelectedSeat }: any) => [
  <SeatButton
    key={19}
    seatNumber={19}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={20}
    seatNumber={20}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={21}
    seatNumber={21}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={22}
    seatNumber={22}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={23}
    seatNumber={23}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
  <SeatButton
    key={24}
    seatNumber={24}
    setSelectedSeat={setSelectedSeat}
    image={Sleeper}
  />,
];

export const ticket = [
  {
    departureCity: "Chennai",
    arrivalCity: "Coimbatore",
    departureStop: "Selayur",
    arrivalStop: "Saravanampatti",
    departureTime: "9:40 PM",
    arrivalTime: "6:30 AM",
    duration: "7 hr 50 min",
  },
];

export const summary = [
  {
    baseFare: "Base Fare",
    fare: "₹ 1,200",
    tax: "Taxes",
    taxAmount: "₹ 200",
    convinenceFee: "Convenience Fee",
    convienceAmount: "₹ 50",
    coupon: "E-Coupon(SUPERME)",
    feeAmount: "₹ -100",
    total: "Total Amount",
    totalAmount: "₹ 1350",
  },
];

export const booking = [
  {
    pickday: "Thu,",
    pickdate: " 12 Sep 2023",
    pickUpTime: "02:00 PM onwards",
    dropday: "Fri,",
    dropdate: "13 Sep 2023",
    dropoffTime: "02:00 PM onwards",
    passengers: "3 Adults",
    contactNumber: "9988774455",
    guestName: "Guest Name",
    email: "user@gmail.com",
    busType: "A/C SEATER / SLEEPER (2+1)",
  },
];

export const amenities = [
  {
    wifi: "Wi-Fi",
    ac: "AC",
    tv: "TV",
    charging: "Charging Point",
  },
];
