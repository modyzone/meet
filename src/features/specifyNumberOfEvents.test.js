import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

// loadFeature expects file path to start from project root
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('The app should display 32 events by default', ({ given, when, then }) => {
        given('the user has not specified a number of events to show', () => {

        });

        when('the user loads the data', () => {

        });

        then(/^(\d+) events should be displayed.$/, (arg0) => {

        });
    });

     "When the user types a number into the textbox, the number of events displayed should match the input number",

    test('When the user types a number into the textbox, the number of events displayed should match the input number', ({ 
given, when, then }) => {
        given('the main page is open', () => {

        });

        when('the user types a number into the number of events textbox', () => {

        });

        then('the number of events displayed should match the number input by the user unless there are fewer events than the specified number.', () => {

        });
    });
    });