import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SessionPackage {
    id: string;
    duration: bigint;
    name: string;
    description: string;
    price: bigint;
}
export interface Instructor {
    id: string;
    name: string;
    photoUrl: string;
    qualifications: string;
    experienceYears: bigint;
    specializations: string;
}
export type Time = bigint;
export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface Booking {
    id: string;
    contactInfo: string;
    name: string;
    preferredDate: string;
    preferredTime: string;
    timestamp: Time;
    packageId: string;
}
export interface backendInterface {
    /**
     * / Add instructor
     */
    addInstructor(id: string, name: string, qualifications: string, experienceYears: bigint, specializations: string, photoUrl: string): Promise<void>;
    /**
     * / Add session package
     */
    addSessionPackage(id: string, name: string, description: string, duration: bigint, price: bigint): Promise<void>;
    /**
     * / Delete booking
     */
    deleteBooking(id: string): Promise<void>;
    /**
     * / Get booking
     */
    getBooking(id: string): Promise<Booking>;
    /**
     * / Get contact message
     */
    getContactMessage(id: string): Promise<ContactMessage>;
    /**
     * / Get instructor
     */
    getInstructor(id: string): Promise<Instructor>;
    /**
     * / Get session package
     */
    getSessionPackage(id: string): Promise<SessionPackage>;
    /**
     * / List all bookings
     */
    listBookings(): Promise<Array<Booking>>;
    /**
     * / List all contact messages
     */
    listContactMessages(): Promise<Array<ContactMessage>>;
    /**
     * / List all instructors
     */
    listInstructors(): Promise<Array<Instructor>>;
    /**
     * / List all session packages
     */
    listSessionPackages(): Promise<Array<SessionPackage>>;
    /**
     * / Submit booking request
     */
    submitBooking(id: string, name: string, contactInfo: string, preferredDate: string, preferredTime: string, packageId: string): Promise<void>;
    /**
     * / Submit contact form
     */
    submitContactForm(id: string, name: string, email: string, phone: string, message: string): Promise<void>;
    /**
     * / Update instructor
     */
    updateInstructor(id: string, name: string, qualifications: string, experienceYears: bigint, specializations: string, photoUrl: string): Promise<void>;
    /**
     * / Update session package
     */
    updateSessionPackage(id: string, name: string, description: string, duration: bigint, price: bigint): Promise<void>;
}
