import { IPlace } from "@/types/map";
import { applySearchParams } from "@/utils/navigation";
import { useLocation } from "@honzachalupa/design-system";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
    const searchParams_ = useSearchParams();
    const router = useRouter();
    const location = useLocation();

    const searchParams = useMemo(
        () => Object.fromEntries(searchParams_.entries()),
        [searchParams_]
    );

    const navigateTo = {
        back: router.back,
        forward: router.forward,
        refresh: router.refresh,
        replace: router.replace,

        login: ({ mode }: { mode: "sign-up" | "sign-in" }) =>
            router.push(applySearchParams("/login", { mode })),

        home: (placeId?: IPlace["id"]) =>
            router.push(applySearchParams("/", { placeId })),

        profile: () => router.push("/account"),
        settings: () => router.push("/settings"),
        about: () => router.push("/about"),
    };

    return {
        location,
        searchParams,
        navigateTo,
    };
};
