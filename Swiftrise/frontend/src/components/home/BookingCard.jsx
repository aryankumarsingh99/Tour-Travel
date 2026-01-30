import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  ArrowLeftRight,
} from 'lucide-react';
import { LOCATIONS } from '../../data/locations';

export default function BookingCard({ tripType, setTripType, activeTab }) {
  const [toLocation, setToLocation] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [filteredTo, setFilteredTo] = useState([]);
  const [filteredFrom, setFilteredFrom] = useState([]);
  const [showToList, setShowToList] = useState(false);
  const [showFromList, setShowFromList] = useState(false);

  const [depDate, setDepDate] = useState('');
  const [depTime, setDepTime] = useState('');
  const [persons, setPersons] = useState('1');

  const inputStyle =
    'w-full mt-1 px-2 py-2 text-sm bg-white border border-gray-300 rounded-lg outline-none focus:border-gray-400';

  /* ---------- FILTER LOGIC ---------- */
  useEffect(() => {
    if (!toLocation.trim()) return setFilteredTo([]);
    setFilteredTo(
      LOCATIONS.filter(loc =>
        loc.toLowerCase().startsWith(toLocation.toLowerCase())
      )
    );
  }, [toLocation]);

  useEffect(() => {
    if (!fromLocation.trim()) return setFilteredFrom([]);
    setFilteredFrom(
      LOCATIONS.filter(loc =>
        loc.toLowerCase().startsWith(fromLocation.toLowerCase())
      )
    );
  }, [fromLocation]);

  return (
    <div className="relative -mt-20 sm:-mt-24 z-20 w-[95%] max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6">

      {/* Trip Type */}
      <div className="flex gap-6 mb-4 text-sm font-medium">
        <span
          onClick={() => setTripType('One-Way')}
          className={`cursor-pointer pb-1 flex items-center gap-2 ${
            tripType === 'One-Way'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-500'
          }`}
        >
          <ArrowRight className="w-4 h-4" /> One-Way
        </span>
        <span
          onClick={() => setTripType('Round-Trip')}
          className={`cursor-pointer pb-1 flex items-center gap-2 ${
            tripType === 'Round-Trip'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-500'
          }`}
        >
          <ArrowLeftRight className="w-4 h-4" /> Round-Trip
        </span>
      </div>

      <div className="border-t border-gray-200 mb-4" />

      {/* FORM GRID — COMPACT & NO SCROLL */}
      <div
        className="
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
        "
      >

        {/* TO */}
        <div className="relative">
          <label className="text-xs text-gray-500 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> To
          </label>
          <input
            value={toLocation}
            onChange={(e) => {
              setToLocation(e.target.value);
              setShowToList(true);
            }}
            onBlur={() => setTimeout(() => setShowToList(false), 150)}
            className={inputStyle}
          />
          {showToList && filteredTo.length > 0 && (
            <ul className="absolute z-50 bg-white border border-gray-200 rounded-lg mt-1 w-full max-h-40 overflow-y-auto shadow-lg">
              {filteredTo.map((loc, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setToLocation(loc);
                    setShowToList(false);
                  }}
                  className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* FROM */}
        <div className="relative">
          <label className="text-xs text-gray-500 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> From
          </label>
          <input
            value={fromLocation}
            onChange={(e) => {
              setFromLocation(e.target.value);
              setShowFromList(true);
            }}
            onBlur={() => setTimeout(() => setShowFromList(false), 150)}
            className={inputStyle}
          />
          {showFromList && filteredFrom.length > 0 && (
            <ul className="absolute z-50 bg-white border border-gray-200 rounded-lg mt-1 w-full max-h-40 overflow-y-auto shadow-lg">
              {filteredFrom.map((loc, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setFromLocation(loc);
                    setShowFromList(false);
                  }}
                  className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* DATE */}
        <div>
          <label className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Date
          </label>
          <input
            type="date"
            value={depDate}
            onChange={(e) => setDepDate(e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* TIME */}
        <div>
          <label className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3 h-3" /> Time
          </label>
          <input
            type="time"
            value={depTime}
            onChange={(e) => setDepTime(e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* PERSONS */}
        <div>
          <label className="text-xs text-gray-500 flex items-center gap-1">
            <Users className="w-3 h-3" /> Persons
          </label>
          <select
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
            className={inputStyle}
          >
            {[...Array(10).keys()].map(n => (
              <option key={n + 1}>{n + 1}</option>
            ))}
          </select>
        </div>
      </div>

      {/* SEARCH */}
      <div className="mt-4 flex justify-end">
        <button className="px-8 py-2 rounded-full bg-[#1CA8CB] text-white font-medium shadow-md hover:opacity-90 transition">
          Search
        </button>
      </div>
    </div>
  );
}