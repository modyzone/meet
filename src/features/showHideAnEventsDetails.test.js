import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount, shallow } from 'enzyme';

import { mockData } from "../mock-data";
import { extractLocations } from "../api";
const locations = extractLocations(mockData);

import App from '../App';
import CitySearch from "../CitySearch";

// loadFeature expects file path to start from project root
const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    
    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        given('the main page is open', () => {

        });

        when('the user starts typing in the city textbox', () => {

        });

        then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {

        });
    });

     "User can select a city from the suggested list",

    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        given('user was typing “Berlin” in the city textbox', () => {

        });

        and('the list of suggested cities is showing', () => {

        });

        when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {

        });

        then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {

        });

        and('the user should receive a list of upcoming events in that city', () => {

        });
    });
});