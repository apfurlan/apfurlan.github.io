import React from 'react';
import { FaHardHat } from 'react-icons/fa';
import './UnderConstruction.css';

const UnderConstruction = ({ section }) => (
  <section className="under-construction">
    <FaHardHat className="construction-icon" />
    <h2>{section}</h2>
    <p>This page is under construction. Check back soon!</p>
  </section>
);

export default UnderConstruction;
