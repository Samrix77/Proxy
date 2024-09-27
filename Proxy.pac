function FindProxyForURL(url, host) {
    // Check if the requested URL matches a specific domain
    if (shExpMatch(host, "*.gov.om")) {
        return "PROXY tryhooks_gmail_com:PghUWD3Ad8zzH2_-country-OM@la.residential.rayobyte.com:8000";
    }

    // Default to direct connection for all other URLs
    return "DIRECT";
}