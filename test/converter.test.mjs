import assert from 'node:assert/strict';
import { test } from 'node:test';
import { celsiusToFahrenheit } from '../site/converter.mjs';

test('converts 0°C to 32°F', () => {
  assert.equal(celsiusToFahrenheit(0), 32);
});

test('converts 100°C to 212°F', () => {
  assert.equal(celsiusToFahrenheit(100), 212);
});

test('converts -40°C to -40°F', () => {
  assert.equal(celsiusToFahrenheit(-40), -40);
});