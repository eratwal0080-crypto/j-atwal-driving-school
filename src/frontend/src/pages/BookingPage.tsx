import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllPackages, useSubmitBooking } from "@/hooks/useQueries";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  packageId: string;
  preferredTime: string;
}

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { data: packages, isLoading: packagesLoading } = useGetAllPackages();
  const { mutate: submitBooking, isPending } = useSubmitBooking();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BookingFormData>();

  const selectedPackageId = watch("packageId");

  const onSubmit = (data: BookingFormData) => {
    if (!selectedDate) {
      toast.error("Please select a preferred date");
      return;
    }

    const bookingId = `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const contactInfo = `Email: ${data.email}, Phone: ${data.phone}`;

    submitBooking(
      {
        id: bookingId,
        name: data.name,
        contactInfo,
        preferredDate: format(selectedDate, "yyyy-MM-dd"),
        preferredTime: data.preferredTime,
        packageId: data.packageId,
      },
      {
        onSuccess: () => {
          toast.success(
            "Booking submitted successfully! We will contact you shortly to confirm.",
          );
          reset();
          setSelectedDate(undefined);
        },
        onError: () => {
          toast.error("Failed to submit booking. Please try again.");
        },
      },
    );
  };

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
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
              Fill out the form below and we'll contact you to confirm your
              booking
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
                Please provide your details and preferred lesson time. We'll
                reach out to confirm your booking within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Package Selection */}
                <div className="space-y-2">
                  <Label htmlFor="package">Select Package *</Label>
                  {packagesLoading ? (
                    <Skeleton className="h-10 w-full" />
                  ) : (
                    <Select
                      onValueChange={(value) => setValue("packageId", value)}
                      value={selectedPackageId}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a package" />
                      </SelectTrigger>
                      <SelectContent>
                        {packages?.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.id}>
                            {pkg.name} - ${Number(pkg.price)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  {errors.packageId && (
                    <p className="text-sm text-destructive">
                      {errors.packageId.message}
                    </p>
                  )}
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label>Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate
                          ? format(selectedDate, "PPP")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Select
                    onValueChange={(value) => setValue("preferredTime", value)}
                    {...register("preferredTime", {
                      required: "Time is required",
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.preferredTime && (
                    <p className="text-sm text-destructive">
                      {errors.preferredTime.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Booking Request"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">What happens next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• We'll review your booking request within 24 hours</li>
                <li>• You'll receive a confirmation email or phone call</li>
                <li>
                  • We'll confirm your lesson date, time, and pick-up location
                </li>
                <li>• Payment can be made on the day of your first lesson</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
