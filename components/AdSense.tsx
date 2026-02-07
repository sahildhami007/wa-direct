"use client";

import { useEffect } from "react";

export default function AdSense({
    slot,
    format = "auto",
    responsive = true,
}: {
    slot: string;
    format?: string;
    responsive?: boolean;
}) {
    const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

    if (!adsenseClientId || !slot) {
        return null;
    }

    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("Adsense error", e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={adsenseClientId}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
        />
    );
}
