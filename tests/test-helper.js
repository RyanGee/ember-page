import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

// Tried following testing section of ember docs but not had much luck - throws errors when using ".click()".
//
// Having spent the last few months managing our busy support department I've become well aware of the consequences of insufficient testing.
//
// I understand the function and importance of solid unit testing, version control and DevOps procedures, but have been met with resistance 
// when trying to integrate these into our current project workflow.
//
// I'd love the opportunity to learn these skills properly so I can spend less time firefighting and more time writing clean, scalable code!

start();
