import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  ArrowLeftRight,
  Plane,
  Route,
} from "lucide-react";
import { LOCATIONS } from "../../data/locations";

export default function BookingCard({ tripType, setTripType, activeTab }) {
  const navigate = useNavigate();

  /* ===================== LOCAL TRIP ===================== */
  const [toLocation, setToLocation] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [filteredTo, setFilteredTo] = useState([]);
  const [filteredFrom, setFilteredFrom] = useState([]);
  const [showToList, setShowToList] = useState(false);
  const [showFromList, setShowFromList] = useState(false);
  const [depDate, setDepDate] = useState("");
  const [depTime, setDepTime] = useState("");
  const [persons, setPersons] = useState("1");

  /* ===================== AIRPORT TRANSFER ===================== */
  const [airportFrom, setAirportFrom] = useState("");
  const [airportName, setAirportName] = useState("");
  const [airportDate, setAirportDate] = useState("");
  const [airportTime, setAirportTime] = useState("");
  const [filteredAirportFrom, setFilteredAirportFrom] = useState([]);
  const [showAirportFromList, setShowAirportFromList] = useState(false);

  /* ===================== MULTIWAY ===================== */
  const [multiFrom, setMultiFrom] = useState("");
  const [stop1, setStop1] = useState("");
  const [stop2, setStop2] = useState("");
  const [multiDate, setMultiDate] = useState("");
  const [multiTime, setMultiTime] = useState("");

  const [filteredMultiFrom, setFilteredMultiFrom] = useState([]);
  const [filteredStop1, setFilteredStop1] = useState([]);
  const [filteredStop2, setFilteredStop2] = useState([]);

  const [showMultiFromList, setShowMultiFromList] = useState(false);
  const [showStop1List, setShowStop1List] = useState(false);
  const [showStop2List, setShowStop2List] = useState(false);

  /* ===================== FILTER ===================== */
  const filter = (value, setter) => {
    if (!value.trim()) return setter([]);
    setter(
      LOCATIONS.filter((l) =>
        l.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  useEffect(() => filter(toLocation, setFilteredTo), [toLocation]);
  useEffect(() => filter(fromLocation, setFilteredFrom), [fromLocation]);
  useEffect(() => filter(airportFrom, setFilteredAirportFrom), [airportFrom]);
  useEffect(() => filter(multiFrom, setFilteredMultiFrom), [multiFrom]);
  useEffect(() => filter(stop1, setFilteredStop1), [stop1]);
  useEffect(() => filter(stop2, setFilteredStop2), [stop2]);

  /* ===================== ROUND TRIP ===================== */
  const [selectedRoundTrip, setSelectedRoundTrip] = useState(null);

  const showRoundTrips =
    activeTab === "Local Trip" &&
    tripType === "Round-Trip" &&
    toLocation &&
    fromLocation &&
    depDate &&
    depTime;

  const roundTripOptions = [
    { id: 1, depart: "06:30 AM", return: "08:45 PM", price: "₹4,200" },
    { id: 2, depart: "10:00 AM", return: "10:30 PM", price: "₹4,600" },
    { id: 3, depart: "02:45 PM", return: "12:15 AM", price: "₹4,900" },
    { id: 4, depart: "07:15 PM", return: "06:00 AM", price: "₹5,300" },
  ];

  /* ===================== TAXI PACKAGES ===================== */
  const taxiPackages = [
    { id: 1, name: "4 Hours / 40 KM", price: "₹1,499" },
    { id: 2, name: "8 Hours / 80 KM", price: "₹2,699" },
    { id: 3, name: "12 Hours / 120 KM", price: "₹3,899" },
  ];

  const goToCheckout = () => navigate("/checkout");

  return (
    <div className="relative -mt-20 sm:-mt-24 z-20 w-[95%] max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6">

      {/* ===================== LOCAL TRIP ===================== */}
      {activeTab === "Local Trip" && (
        <>
          <div className="flex gap-6 mb-4 text-sm font-medium">
            <span
              onClick={() => setTripType("One-Way")}
              className={`cursor-pointer pb-1 flex items-center gap-1 ${
                tripType === "One-Way"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500"
              }`}
            >
              <ArrowRight className="w-4 h-4" /> One-Way
            </span>

            <span
              onClick={() => setTripType("Round-Trip")}
              className={`cursor-pointer pb-1 flex items-center gap-1 ${
                tripType === "Round-Trip"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500"
              }`}
            >
              <ArrowLeftRight className="w-4 h-4" /> Round-Trip
            </span>
          </div>

          <FormGrid>
            <InputBox label="To" icon={MapPin} value={toLocation} setValue={setToLocation} list={filteredTo} showList={showToList} setShowList={setShowToList} />
            <InputBox label="From" icon={MapPin} value={fromLocation} setValue={setFromLocation} list={filteredFrom} showList={showFromList} setShowList={setShowFromList} />
            <SimpleInput label="Date" icon={Calendar} type="date" value={depDate} setValue={setDepDate} />
            <SimpleInput label="Time" icon={Clock} type="time" value={depTime} setValue={setDepTime} />
            <SelectPersons persons={persons} setPersons={setPersons} />
          </FormGrid>

          {showRoundTrips && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {roundTripOptions.map(opt => (
                <div
                  key={opt.id}
                  onClick={() => setSelectedRoundTrip(opt.id)}
                  className={`border rounded-lg p-3 cursor-pointer transition ${
                    selectedRoundTrip === opt.id
                      ? "border-[#1CA8CB] bg-[#EAF7FB] shadow"
                      : "hover:shadow"
                  }`}
                >
                  <div className="flex justify-between text-sm">
                    <span>{opt.depart}</span>
                    <span>{opt.return}</span>
                  </div>
                  <div className="text-right font-semibold text-[#1CA8CB]">
                    {opt.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ===================== TAXI PACKAGES ===================== */}
      {activeTab === "Taxi Packages" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {taxiPackages.map(pkg => (
            <div key={pkg.id} className="border rounded-xl p-4 flex flex-col justify-between hover:shadow transition">
              <div>
                <h3 className="font-semibold">{pkg.name}</h3>
                <p className="text-[#1CA8CB] font-bold mt-2">{pkg.price}</p>
              </div>
              <button onClick={goToCheckout} className="mt-4 bg-[#1CA8CB] text-white py-2 rounded-full">
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ===================== AIRPORT TRANSFER ===================== */}
      {activeTab === "Airport Transfer" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <InputBox label="From" icon={MapPin} value={airportFrom} setValue={setAirportFrom} list={filteredAirportFrom} showList={showAirportFromList} setShowList={setShowAirportFromList} />
          <SimpleInput label="Airport Name" icon={Plane} value={airportName} setValue={setAirportName} />
          <SimpleInput label="Date" icon={Calendar} type="date" value={airportDate} setValue={setAirportDate} />
          <SimpleInput label="Time" icon={Clock} type="time" value={airportTime} setValue={setAirportTime} />
        </div>
      )}

      {/* ===================== MULTIWAY ===================== */}
      {activeTab === "Multiway" && (
        <FormGrid>
          <InputBox label="From" icon={MapPin} value={multiFrom} setValue={setMultiFrom} list={filteredMultiFrom} showList={showMultiFromList} setShowList={setShowMultiFromList} />
          <InputBox label="Stop 1" icon={Route} value={stop1} setValue={setStop1} list={filteredStop1} showList={showStop1List} setShowList={setShowStop1List} />
          <InputBox label="Stop 2" icon={Route} value={stop2} setValue={setStop2} list={filteredStop2} showList={showStop2List} setShowList={setShowStop2List} />
          <SimpleInput label="Date" icon={Calendar} type="date" value={multiDate} setValue={setMultiDate} />
          <SimpleInput label="Time" icon={Clock} type="time" value={multiTime} setValue={setMultiTime} />
        </FormGrid>
      )}

      {/* ===================== BOOK NOW ===================== */}
      <div className="mt-4 flex justify-end">
        <button onClick={goToCheckout} className="px-8 py-2 bg-[#1CA8CB] text-white rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
}

/* ===================== HELPERS ===================== */

function FormGrid({ children }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      {children}
    </div>
  );
}

function InputBox({ label, icon: Icon, value, setValue, list, showList, setShowList }) {
  return (
    <div className="relative">
      <label className="text-xs flex items-center gap-1 text-gray-500">
        <Icon className="w-3 h-3" /> {label}
      </label>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setShowList(true);
        }}
        onBlur={() => setTimeout(() => setShowList(false), 150)}
        className="w-full mt-1 px-1 py-2 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-[#1CA8CB] focus:outline-none"
      />
      {showList && list.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border rounded-lg shadow max-h-40 overflow-y-auto">
          {list.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setValue(item);
                setShowList(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SimpleInput({ label, icon: Icon, type = "text", value, setValue }) {
  return (
    <div>
      <label className="text-xs flex items-center gap-1 text-gray-500">
        <Icon className="w-3 h-3" /> {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full mt-1 px-1 py-2 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-[#1CA8CB] focus:outline-none"
      />
    </div>
  );
}

function SelectPersons({ persons, setPersons }) {
  return (
    <div>
      <label className="text-xs flex items-center gap-1 text-gray-500">
        <Users className="w-3 h-3" /> Persons
      </label>
      <select
        value={persons}
        onChange={(e) => setPersons(e.target.value)}
        className="w-full mt-1 px-1 py-2 text-sm bg-transparent border-0 border-b border-gray-300 focus:border-[#1CA8CB] focus:outline-none"
      >
        {[...Array(10).keys()].map((n) => (
          <option key={n + 1}>{n + 1}</option>
        ))}
      </select>
    </div>
  );
}