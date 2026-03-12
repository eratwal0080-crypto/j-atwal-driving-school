import type {
  Booking,
  ContactMessage,
  Instructor,
  SessionPackage,
} from "@/backend";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

// Session Packages
export function useGetAllPackages() {
  const { actor, isFetching } = useActor();

  return useQuery<SessionPackage[]>({
    queryKey: ["packages"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listSessionPackages();
    },
    enabled: !!actor && !isFetching,
  });
}

// Instructors
export function useGetAllInstructors() {
  const { actor, isFetching } = useActor();

  return useQuery<Instructor[]>({
    queryKey: ["instructors"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listInstructors();
    },
    enabled: !!actor && !isFetching,
  });
}

// Bookings
export function useSubmitBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      id: string;
      name: string;
      contactInfo: string;
      preferredDate: string;
      preferredTime: string;
      packageId: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitBooking(
        data.id,
        data.name,
        data.contactInfo,
        data.preferredDate,
        data.preferredTime,
        data.packageId,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

// Contact Form
export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      id: string;
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitContactForm(
        data.id,
        data.name,
        data.email,
        data.phone,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}
