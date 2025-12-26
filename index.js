/**

staqlt | Senior Solution Architect

Project: Small Google API Update – Add Miami & Atlanta

CHANGE LOG:

Line 14: Added 'Miami, FL' and 'Atlanta, GA' to the CITIES_TO_SEARCH array. */

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; const SHEET_NAME = 'Leads';

// EXISTING CITIES + NEW ADDITIONS const CITIES_TO_SEARCH = [ 'New York, NY', 'Chicago, IL', 'Miami, FL', // <--- ADDED 'Atlanta, GA' // <--- ADDED ];

function updateLeads() { const ss = SpreadsheetApp.getActiveSpreadsheet(); const sheet = ss.getSheetByName(SHEET_NAME);

CITIES_TO_SEARCH.forEach(city => { const results = fetchLeadsForCity(city); if (results.length > 0) { appendResultsToSheet(sheet, results); } }); }

/**

Fetches leads using Google Places Text Search.

Logic, filters (suspended/closed), and API structure remain UNCHANGED. */ function fetchLeadsForCity(city) { const query = encodeURIComponent(qualified leads in ${city}); const url = https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${API_KEY};

const response = UrlFetchApp.fetch(url); const data = JSON.parse(response.getContentText());

// Existing Filter Logic (DO NOT CHANGE) return data.results.filter(place => { return place.business_status === 'OPERATIONAL'; }); }

function appendResultsToSheet(sheet, results) { // Existing Sheet Structure (DO NOT CHANGE) results.forEach(place => { sheet.appendRow([ place.name, place.formatted_address, place.rating, place.user_ratings_total ]); }); }