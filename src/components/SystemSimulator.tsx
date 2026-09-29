"use client";

import React, { useState } from "react";
import {
  Send,
  RefreshCw,
  CheckCircle2,
  Terminal,
  Server,
  Zap,
  Plus,
  Trash2,
  Copy,
  Check,
  Globe
} from "lucide-react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface HeaderItem {
  key: string;
  value: string;
  enabled: boolean;
}

interface PresetEndpoint {
  id: string;
  name: string;
  method: HttpMethod;
  url: string;
  description: string;
  headers: HeaderItem[];
  body: string;
  mockResponse: (latency: number) => {
    status: number;
    statusText: string;
    size: string;
    headers: Record<string, string>;
    data: any;
  };
}

export function SystemSimulator() {
  const presets: PresetEndpoint[] = [
    {
      id: "storevia-orders",
      name: "Storevia E-Commerce Orders",
      method: "POST",
      url: "https://api.janaka.dev/v1/storevia/orders",
      description: "Laravel Multi-Vendor Order Dispatch & MySQL Transaction Pipeline",
      headers: [
        { key: "Content-Type", value: "application/json", enabled: true },
        { key: "Authorization", value: "Bearer storevia_sec_token_9912", enabled: true },
        { key: "X-Vendor-ID", value: "vendor_lanka_electronics", enabled: true }
      ],
      body: JSON.stringify(
        {
          customer_id: "cust_998231",
          items: [{ sku: "SKU_ESP32_WROOM", quantity: 2, unit_price: 4500 }],
          shipping_address: { city: "Colombo", postal_code: "00100", country: "Sri Lanka" },
          payment_method: "CARD_PAYMENT"
        },
        null,
        2
      ),
      mockResponse: (lat) => ({
        status: 200,
        statusText: "OK (Order Created)",
        size: "1.4 KB",
        headers: {
          "content-type": "application/json; charset=utf-8",
          "x-powered-by": "Laravel / PHP 8.3",
          "x-ratelimit-remaining": "59"
        },
        data: {
          order_ref: "ORD_STOREVIA_882910",
          payment_status: "SUCCESS_VERIFIED",
          mysql_transaction: "COMMITTED",
          vendor_notifications: ["NOTIFIED_VENDOR_DISPATCH"],
          timestamp: new Date().toISOString(),
          developer: "T.M. Janaka Namal Thennakoon (Backend Dev)"
        }
      })
    },
    {
      id: "hexuniverse-listings",
      name: "HexUniverse Campus Listings",
      method: "GET",
      url: "https://api.janaka.dev/v1/hexuniverse/listings?campus=uoc.lk",
      description: "Next.js & Node.js P2P University Campus Marketplace Filter API",
      headers: [
        { key: "Accept", value: "application/json", enabled: true },
        { key: "X-University-Domain", value: "uoc.lk", enabled: true }
      ],
      body: "",
      mockResponse: (lat) => ({
        status: 200,
        statusText: "OK",
        size: "980 B",
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "s-maxage=60, stale-while-revalidate",
          "x-cache-status": "HIT_REDIS_CACHE"
        },
        data: {
          campus_filter: "University of Colombo - Faculty of Technology",
          total_listings: 18,
          featured_items: [
            {
              id: "item_01",
              title: "Software Engineering System Architecture Notes",
              price_lkr: 2000,
              seller: "Verified Undergraduate (NIBM / UOC)"
            }
          ],
          cache_hit: true
        }
      })
    },
    {
      id: "cardly-analytics",
      name: "Cardly Financial Analytics",
      method: "POST",
      url: "https://api.janaka.dev/v1/cardly/analytics",
      description: "React Native & Python Flask Credit Card Utilization & Reminders API",
      headers: [
        { key: "Content-Type", value: "application/json", enabled: true },
        { key: "X-App-Version", value: "1.4.0-mobile", enabled: true }
      ],
      body: JSON.stringify(
        {
          user_id: "user_janaka_cardly",
          currency: "LKR",
          period: "THIS_MONTH"
        },
        null,
        2
      ),
      mockResponse: (lat) => ({
        status: 200,
        statusText: "OK",
        size: "1.1 KB",
        headers: {
          "content-type": "application/json; charset=utf-8",
          "server": "Python/Flask Gunicorn WSGI"
        },
        data: {
          total_cards_linked: 3,
          utilization_ratio: "24.5%",
          due_reminders: [
            { card_alias: "Visa Gold", due_days_remaining: 5, min_due_lkr: 12500 }
          ],
          security: "AES_256_ENCRYPTED_PAYLOAD"
        }
      })
    },
    {
      id: "auth-refresh",
      name: "JWT Auth Token Refresh",
      method: "PUT",
      url: "https://api.janaka.dev/v1/auth/refresh-token",
      description: "OAuth2 / JWT Token Renewal Endpoint",
      headers: [
        { key: "Content-Type", value: "application/json", enabled: true },
        { key: "Authorization", value: "Bearer ref_token_99182371", enabled: true }
      ],
      body: JSON.stringify(
        {
          grant_type: "refresh_token"
        },
        null,
        2
      ),
      mockResponse: (lat) => ({
        status: 200,
        statusText: "200 OK (Token Renewed)",
        size: "650 B",
        headers: {
          "content-type": "application/json; charset=utf-8",
          "x-auth-scheme": "Bearer JWT"
        },
        data: {
          access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          token_type: "Bearer",
          expires_in: 3600,
          issued_at: new Date().toISOString()
        }
      })
    }
  ];

  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [method, setMethod] = useState<HttpMethod>(presets[0].method);
  const [url, setUrl] = useState<string>(presets[0].url);
  const [headers, setHeaders] = useState<HeaderItem[]>(presets[0].headers);
  const [body, setBody] = useState<string>(presets[0].body);
  const [activeTab, setActiveTab] = useState<"params" | "headers" | "body">("params");
  
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const loadPreset = (idx: number) => {
    setSelectedPreset(idx);
    const p = presets[idx];
    setMethod(p.method);
    setUrl(p.url);
    setHeaders([...p.headers]);
    setBody(p.body);
    setResponse(null);
  };

  const handleAddHeader = () => {
    setHeaders([...headers, { key: "", value: "", enabled: true }]);
  };

  const handleRemoveHeader = (idx: number) => {
    setHeaders(headers.filter((_, i) => i !== idx));
  };

  const handleHeaderChange = (idx: number, field: "key" | "value" | "enabled", val: any) => {
    const next = [...headers];
    next[idx] = { ...next[idx], [field]: val };
    setHeaders(next);
  };

  const handleSendRequest = async () => {
    setLoading(true);
    setResponse(null);
    const simulatedLatency = Math.floor(Math.random() * 20) + 14;

    setTimeout(() => {
      const preset = presets[selectedPreset];
      let resData;
      if (preset && preset.url === url && preset.method === method) {
        resData = preset.mockResponse(simulatedLatency);
      } else {
        let parsedBody = {};
        try {
          if (body.trim()) parsedBody = JSON.parse(body);
        } catch {
          parsedBody = { raw_body: body };
        }

        resData = {
          status: method === "POST" ? 201 : 200,
          statusText: method === "POST" ? "Created" : "OK",
          size: "1.2 KB",
          headers: {
            "content-type": "application/json; charset=utf-8",
            "x-custom-api": "Janaka REST Endpoint Tester"
          },
          data: {
            method: method,
            url: url,
            received_headers: headers.filter(h => h.enabled && h.key).reduce((acc, h) => ({ ...acc, [h.key]: h.value }), {}),
            payload_received: method !== "GET" ? parsedBody : undefined,
            timestamp: new Date().toISOString(),
            status: "SUCCESS"
          }
        };
      }

      setResponse({
        ...resData,
        executionTimeMs: simulatedLatency
      });
      setLoading(false);
    }, 550);
  };

  const handleCopyResponse = () => {
    if (response?.data) {
      navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getMethodBadgeColor = (m: HttpMethod) => {
    switch (m) {
      case "GET":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/40";
      case "POST":
        return "bg-[#FF5500]/20 text-[#FF5500] border-[#FF5500]/40";
      case "PUT":
        return "bg-amber-500/20 text-amber-400 border-amber-500/40";
      case "DELETE":
        return "bg-rose-500/20 text-rose-400 border-rose-500/40";
    }
  };

  return (
    <section id="sandbox" className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40">
          API TESTER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                REST API Tester
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              Interactive <span className="text-[#FF5500]">Postman API Client</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Test RESTful endpoints, configure custom HTTP methods, edit request headers & JSON body payloads in real-time.
            </p>
          </div>

          {/* Quick Preset Selector Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {presets.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => loadPreset(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 border ${
                  selectedPreset === idx
                    ? "bg-[#FF5500] text-white border-[#FF5500] shadow-md shadow-[#FF5500]/25"
                    : "bg-white text-neutral-700 hover:text-neutral-900 border-neutral-300 hover:border-neutral-400 shadow-sm"
                }`}
              >
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold ${getMethodBadgeColor(p.method)}`}>
                  {p.method}
                </span>
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Postman-Style Studio Container */}
        <div className="bg-[#1E1E24] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 font-mono text-xs">
          
          {/* Address Bar & Method Dropdown */}
          <div className="bg-[#141518] p-4 sm:p-5 border-b border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Method Select */}
            <div className="relative shrink-0">
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value as HttpMethod)}
                className="w-full sm:w-32 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-extrabold text-xs focus:outline-none focus:border-[#FF5500] cursor-pointer appearance-none"
              >
                <option value="GET" className="text-emerald-400 font-bold">GET</option>
                <option value="POST" className="text-[#FF5500] font-bold">POST</option>
                <option value="PUT" className="text-amber-400 font-bold">PUT</option>
                <option value="DELETE" className="text-rose-400 font-bold">DELETE</option>
              </select>
            </div>

            {/* URL Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter request URL (e.g. https://api.janaka.dev/v1/orders)"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 font-mono text-xs focus:outline-none focus:border-[#FF5500] transition-colors"
              />
            </div>

            {/* Send Request Button */}
            <button
              onClick={handleSendRequest}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs shadow-md shadow-[#FF5500]/25 transition-all shrink-0 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Request</span>
                </>
              )}
            </button>
          </div>

          {/* Console Split Screen: Left (Request Config), Right (Response Output) */}
          <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 min-h-[460px]">
            
            {/* Left Panel: Tabs (Headers / Body / Info) */}
            <div className="lg:col-span-6 p-5 sm:p-6 space-y-4 flex flex-col justify-between">
              <div>
                {/* Request Tabs Header */}
                <div className="flex items-center gap-4 border-b border-neutral-800 pb-3 mb-4">
                  <button
                    onClick={() => setActiveTab("params")}
                    className={`text-xs font-bold transition-colors pb-1 relative ${
                      activeTab === "params" ? "text-[#FF5500]" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Params
                    {activeTab === "params" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5500] rounded-full" />}
                  </button>

                  <button
                    onClick={() => setActiveTab("headers")}
                    className={`text-xs font-bold transition-colors pb-1 relative flex items-center gap-1.5 ${
                      activeTab === "headers" ? "text-[#FF5500]" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <span>Headers</span>
                    <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-neutral-800 text-neutral-300">
                      {headers.filter(h => h.enabled && h.key).length}
                    </span>
                    {activeTab === "headers" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5500] rounded-full" />}
                  </button>

                  <button
                    onClick={() => setActiveTab("body")}
                    className={`text-xs font-bold transition-colors pb-1 relative flex items-center gap-1.5 ${
                      activeTab === "body" ? "text-[#FF5500]" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <span>Body (JSON)</span>
                    {body.trim() && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />}
                    {activeTab === "body" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5500] rounded-full" />}
                  </button>
                </div>

                {/* Tab 1: Params / Info */}
                {activeTab === "params" && (
                  <div className="space-y-3 text-xs">
                    <div className="bg-neutral-900/80 p-4 rounded-2xl border border-neutral-800 space-y-2">
                      <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Active Preset Description</div>
                      <p className="text-neutral-200 font-sans leading-relaxed">
                        {presets[selectedPreset]?.description || "Custom REST API Endpoint execution"}
                      </p>
                    </div>

                    <div className="bg-neutral-900/50 p-4 rounded-2xl border border-neutral-800/80 space-y-1.5 text-neutral-400 text-[11px]">
                      <div className="flex justify-between">
                        <span>Method:</span>
                        <strong className="text-white font-mono">{method}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Target Host:</span>
                        <strong className="text-neutral-300 font-mono">api.janaka.dev</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Protocol:</span>
                        <strong className="text-emerald-400 font-mono">HTTPS / HTTP/2</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Headers Config Table */}
                {activeTab === "headers" && (
                  <div className="space-y-3">
                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {headers.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={h.enabled}
                            onChange={(e) => handleHeaderChange(idx, "enabled", e.target.checked)}
                            className="rounded accent-[#FF5500] cursor-pointer"
                          />
                          <input
                            type="text"
                            placeholder="Header Key (e.g. Content-Type)"
                            value={h.key}
                            onChange={(e) => handleHeaderChange(idx, "key", e.target.value)}
                            className="w-1/2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-[#FF5500] text-[11px]"
                          />
                          <input
                            type="text"
                            placeholder="Header Value"
                            value={h.value}
                            onChange={(e) => handleHeaderChange(idx, "value", e.target.value)}
                            className="w-1/2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-[#FF5500] text-[11px]"
                          />
                          <button
                            onClick={() => handleRemoveHeader(idx)}
                            className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors shrink-0"
                            title="Remove header"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleAddHeader}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-all text-[11px]"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>Add Header</span>
                    </button>
                  </div>
                )}

                {/* Tab 3: JSON Body Editor */}
                {activeTab === "body" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                      <span>Request Payload (application/json)</span>
                      {method === "GET" && <span className="text-amber-400 text-[10px]">(GET requests usually do not require body)</span>}
                    </div>
                    <textarea
                      rows={9}
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      placeholder='{\n  "key": "value"\n}'
                      className="w-full p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-mono text-[11px] focus:outline-none focus:border-[#FF5500] transition-colors resize-none leading-relaxed"
                    />
                  </div>
                )}
              </div>

              {/* Bottom Specs Note */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#FF5500]" /> Node.js / Laravel API Gateway
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FF5500]" /> High Throughput RESTful
                </span>
              </div>
            </div>

            {/* Right Panel: Response Output Panel */}
            <div className="lg:col-span-6 p-5 sm:p-6 bg-[#16161B] space-y-4 flex flex-col justify-between">
              
              <div>
                {/* Response Status Bar */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Response Output
                  </span>

                  {response && (
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/40 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {response.status} {response.statusText}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800">
                        {response.executionTimeMs}ms
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800">
                        {response.size || "1.2 KB"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Response Code Output Box */}
                {response ? (
                  <div className="relative group">
                    <button
                      onClick={handleCopyResponse}
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] font-mono flex items-center gap-1 transition-colors z-10 border border-neutral-700"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? "Copied" : "Copy JSON"}</span>
                    </button>

                    <div className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800 overflow-x-auto text-[11px] h-[310px] overflow-y-auto">
                      <pre className="text-emerald-400 leading-relaxed font-mono">
                        {JSON.stringify(response.data, null, 2)}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="h-[310px] rounded-2xl border border-dashed border-neutral-800 flex flex-col items-center justify-center p-6 text-center text-neutral-500 space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#FF5500] flex items-center justify-center border border-neutral-800">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-300 font-bold">Ready for API Request Execution</p>
                      <p className="text-[11px] text-neutral-500 mt-1 max-w-xs leading-relaxed">
                        Select a preset or enter your custom URL, headers, and payload above, then click <strong className="text-white">&quot;Send Request&quot;</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Footer Status */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <Globe className="w-3.5 h-3.5 text-[#FF5500]" /> CORS Enabled
                </span>
                <span className="text-neutral-400">
                  Status: {loading ? "Executing..." : response ? "200 Success" : "Idle"}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

