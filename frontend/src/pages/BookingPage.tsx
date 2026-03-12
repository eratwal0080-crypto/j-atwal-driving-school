import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  lessonType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export default function BookingPage() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedLesson, setSelectedLesson] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    const subject = encodeURIComponent(`Driving Lesson Booking Request - ${data.name}`);
    const body = encodeURIComponent(
      `Booking Request Details\n` +
      `========================\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Lesson Type: ${selectedLesson || data.lessonType}\n` +
      `Preferred Date: ${data.preferredDate}\n` +
      `Preferred Time: ${selectedTime || data.preferredTime}\n` +
      `Additional Notes: ${data.notes || 'None'}\n`
    );
    window.location.href = `mailto:jatwaldrivingschool@gmail.com?subject=${subject}&body=${body}`;
  };

  const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM",
  ];

  const lessonTypes = [
    "30-Minute Lesson",
    "1-Hour Lesson",
    "2-Hour Lesson",
    "2-Lesson Package",
    "10-Lesson Package",
    "20-Lesson Package",
    "25-Lesson Package",
    "30-Lesson Package",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Book Your Driving Lesson
            </h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll contact you to confirm your booking
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Booking Form</CardTitle>
              <CardDescription>
                Fill in your details and click Submit. Your email app will open with the booking info ready to send to J Atwal Driving School.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    data-ocid="booking.name.input"
                    placeholder="Your full name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    data-ocid="booking.email.input"
                    placeholder="your@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    data-ocid="booking.phone.input"
                    placeholder="778-916-0055"
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                {/* Lesson Type */}
                <div className="space-y-2">
                  <Label>Lesson Type *</Label>
                  <Select onValueChange={setSelectedLesson} value={selectedLesson}>
                    <SelectTrigger data-ocid="booking.lesson.select">
                      <SelectValue placeholder="Choose a lesson type" />
                    </SelectTrigger>
                    <SelectContent>
                      {lessonTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="preferredDate"
                      type="date"
                      data-ocid="booking.date.input"
                      className="pl-10"
                      min={new Date().toISOString().split("T")[0]}
                      {...register("preferredDate", { required: "Date is required" })}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-sm text-destructive">{errors.preferredDate.message}</p>
                  )}
                </div>

                {/* Preferred Time */}
                <div className="space-y-2">
                  <Label>Preferred Time *</Label>
                  <Select onValueChange={setSelectedTime} value={selectedTime}>
                    <SelectTrigger data-ocid="booking.time.select">
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    data-ocid="booking.notes.textarea"
                    placeholder="Any additional information or requests..."
                    rows={4}
                    {...register("notes")}
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="booking.submit_button"
                  className="w-full"
                  size="lg"
                >
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">What happens next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Clicking Submit will open your email app with the booking details pre-filled</li>
                <li>Just hit Send and your request goes straight to J Atwal Driving School</li>
                <li>We will confirm your lesson date, time, and pick-up location within 24 hours</li>
                <li>Payment can be made on the day of your first lesson</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
