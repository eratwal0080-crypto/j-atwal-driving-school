import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Booking = {
    id : Text;
    name : Text;
    contactInfo : Text;
    preferredDate : Text;
    preferredTime : Text;
    packageId : Text;
    timestamp : Time.Time;
  };

  type ContactMessage = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Instructor = {
    id : Text;
    name : Text;
    qualifications : Text;
    experienceYears : Nat;
    specializations : Text;
    photoUrl : Text;
  };

  type SessionPackage = {
    id : Text;
    name : Text;
    description : Text;
    duration : Nat;
    price : Nat;
  };

  module Booking {
    public func compare(a : Booking, b : Booking) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  module ContactMessage {
    public func compare(a : ContactMessage, b : ContactMessage) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  module Instructor {
    public func compare(a : Instructor, b : Instructor) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  module SessionPackage {
    public func compare(a : SessionPackage, b : SessionPackage) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  type InitArgs = {};

  let bookings = Map.empty<Text, Booking>();
  let contacts = Map.empty<Text, ContactMessage>();
  let instructors = Map.empty<Text, Instructor>();
  let packages = Map.empty<Text, SessionPackage>();

  /// Add session package
  public shared ({ caller }) func addSessionPackage(id : Text, name : Text, description : Text, duration : Nat, price : Nat) : async () {
    if (packages.containsKey(id)) {
      Runtime.trap("Session package with this ID already exists");
    };

    let newPackage : SessionPackage = {
      id;
      name;
      description;
      duration;
      price;
    };

    packages.add(id, newPackage);
  };

  /// Update session package
  public shared ({ caller }) func updateSessionPackage(id : Text, name : Text, description : Text, duration : Nat, price : Nat) : async () {
    switch (packages.get(id)) {
      case (null) { Runtime.trap("Session package not found") };
      case (?_) {
        let updatedPackage : SessionPackage = {
          id;
          name;
          description;
          duration;
          price;
        };
        packages.add(id, updatedPackage);
      };
    };
  };

  /// Get session package
  public query ({ caller }) func getSessionPackage(id : Text) : async SessionPackage {
    let package = packages.get(id);
    switch (package) {
      case (null) { Runtime.trap("Session package not found") };
      case (?p) { p };
    };
  };

  /// List all session packages
  public query ({ caller }) func listSessionPackages() : async [SessionPackage] {
    packages.values().toArray().sort();
  };

  /// Add instructor
  public shared ({ caller }) func addInstructor(id : Text, name : Text, qualifications : Text, experienceYears : Nat, specializations : Text, photoUrl : Text) : async () {
    if (instructors.containsKey(id)) {
      Runtime.trap("Instructor with this ID already exists");
    };

    let newInstructor : Instructor = {
      id;
      name;
      qualifications;
      experienceYears;
      specializations;
      photoUrl;
    };

    instructors.add(id, newInstructor);
  };

  /// Update instructor
  public shared ({ caller }) func updateInstructor(id : Text, name : Text, qualifications : Text, experienceYears : Nat, specializations : Text, photoUrl : Text) : async () {
    switch (instructors.get(id)) {
      case (null) { Runtime.trap("Instructor not found") };
      case (?_) {
        let updatedInstructor : Instructor = {
          id;
          name;
          qualifications;
          experienceYears;
          specializations;
          photoUrl;
        };
        instructors.add(id, updatedInstructor);
      };
    };
  };

  /// Get instructor
  public query ({ caller }) func getInstructor(id : Text) : async Instructor {
    let instructor = instructors.get(id);
    switch (instructor) {
      case (null) { Runtime.trap("Instructor not found") };
      case (?i) { i };
    };
  };

  /// List all instructors
  public query ({ caller }) func listInstructors() : async [Instructor] {
    instructors.values().toArray().sort();
  };

  /// Submit booking request
  public shared ({ caller }) func submitBooking(id : Text, name : Text, contactInfo : Text, preferredDate : Text, preferredTime : Text, packageId : Text) : async () {
    let booking : Booking = {
      id;
      name;
      contactInfo;
      preferredDate;
      preferredTime;
      packageId;
      timestamp = Time.now();
    };

    bookings.add(id, booking);
  };

  /// Get booking
  public query ({ caller }) func getBooking(id : Text) : async Booking {
    let booking = bookings.get(id);
    switch (booking) {
      case (null) { Runtime.trap("Booking not found") };
      case (?b) { b };
    };
  };

  /// List all bookings
  public query ({ caller }) func listBookings() : async [Booking] {
    bookings.values().toArray().sort();
  };

  /// Delete booking
  public shared ({ caller }) func deleteBooking(id : Text) : async () {
    if (bookings.containsKey(id)) {
      bookings.remove(id);
    } else {
      Runtime.trap("Booking not found");
    };
  };

  /// Submit contact form
  public shared ({ caller }) func submitContactForm(id : Text, name : Text, email : Text, phone : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      id;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    contacts.add(id, contactMessage);
  };

  /// Get contact message
  public query ({ caller }) func getContactMessage(id : Text) : async ContactMessage {
    let contact = contacts.get(id);
    switch (contact) {
      case (null) { Runtime.trap("Contact message not found") };
      case (?c) { c };
    };
  };

  /// List all contact messages
  public query ({ caller }) func listContactMessages() : async [ContactMessage] {
    contacts.values().toArray().sort();
  };
};
