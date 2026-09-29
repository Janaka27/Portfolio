"use client";

import React, { useState } from "react";
import { Terminal, Play, RefreshCw, CheckCircle, ShieldCheck, Zap, Server, Globe, Cpu } from "lucide-react";

export function SystemSimulator() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [latency, setLatency] = useState<number>(14);

  const endpoints = [
    {
      name: "POST /api/v1/storevia/orders",
      description: "Laravel Multi-Vendor E-Commerce Order Dispatch & MySQL Transaction",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer storevia_sec_token_9912",
        "X-Vendor-ID": "vendor_lanka_electronics",
      },
      requestBody: {
        customer_id: "cust_998231",
        items: [
          { sku: "SKU_ESP32_WROOM", quantity: 2, unit_price: 4500 }
        ],
        shipping_address: {
          city: "Colombo",
          postal_code: "00100",
          country: "Sri Lanka"
        },
        payment_method: "CARD_PAYMENT"
      },
      simulatedResult: (randLatency: number) => ({
        status: 200,
        statusText: "OK (Order Created)",
        executionTimeMs: randLatency,
        data: {
          order_ref: "ORD_STOREVIA_882910",
          payment_status: "SUCCESS_VERIFIED",
          mysql_transaction: "COMMITTED",
          vendor_notifications: ["NOTIFIED_VENDOR_DISPATCH"],
          timestamp: new Date().toISOString(),
          developer: "Janaka Namal Thennakoon (Backend Dev)"
        }
      })
    },
    {
      name: "GET /api/v1/hexuniverse/listings",
      description: "Next.js & Node.js P2P University Campus Marketplace Filter API",
      method: "GET",
      headers: {
        "Accept": "application/json",
        "X-University-Domain": "uoc.lk",
      },
      requestBody: null,
      simulatedResult: (randLatency: number) => ({
        status: 200,
        statusText: "OK (Listings Found)",
        executionTimeMs: randLatency,
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
          cache_status: "HIT_REDIS_2MS"
        }
      })
    },
    {
      name: "POST /api/v1/cardly/analytics",
      description: "React Native & Python Flask Credit Card Utilization & Reminders API",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-App-Version": "1.4.0-mobile",
      },
      requestBody: {
        user_id: "user_janaka_cardly",
        currency: "LKR",
        date_range: "THIS_MONTH"
      },
      simulatedResult: (randLatency: number) => ({
        status: 200,
        statusText: "OK (Analytics Generated)",
        executionTimeMs: randLatency,
        data: {
          total_cards_linked: 3,
          utilization_ratio: "24.5%",
          due_reminders: [
            { card_alias: "Visa Gold", due_days_remaining: 5, min_due_lkr: 12500 }
          ],
          security: "AES_256_ENCRYPTED_PAYLOAD"
        }
      })
    }
  ];

  const currentEndpoint = endpoints[selectedEndpoint];

  const handleExecute = () => {
    setLoading(true);
    setResponse(null);
    const simulatedLatency = Math.floor(Math.random() * 18) + 12; // 12ms - 30ms
    setLatency(simulatedLatency);

    setTimeout(() => {
      setResponse(currentEndpoint.simulatedResult(simulatedLatency));
      setLoading(false);
    }, 600);
  };

  return (
    <section id="sandbox" className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40">
          SANDBOX
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching template `- Sandbox` */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Live Playground
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              Test Live <span className="text-[#FF5500]">Endpoint Architecture</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Select a microservice endpoint below to simulate live HTTP execution, headers, latency metrics, and JSON contracts.
            </p>
          </div>
        </div>

        {/* Sandbox Console UI */}
        <div className="bg-[#1E1E24] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
          
          {/* Top Bar: Selector */}
          <div className="bg-[#121316] p-5 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {endpoints.map((ep, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedEndpoint(idx);
                    setResponse(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                    selectedEndpoint === idx
                      ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25"
                      : "bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700"
                  }`}
                >
                  <span className="font-extrabold mr-1.5">{ep.method}</span> {ep.name.split(" ")[1]}
                </button>
              ))}
            </div>

            <button
              onClick={handleExecute}
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs font-bold shadow-md shadow-[#FF5500]/20 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Executing Request...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Execute Request</span>
                </>
              )}
            </button>
          </div>

          {/* Console Body Grid */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 font-mono text-xs">
            {/* Request Panel */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Endpoint Description</span>
                <p className="text-xs text-white font-sans font-semibold mt-1">{currentEndpoint.description}</p>
              </div>

              {/* Method & URL */}
              <div className="bg-neutral-900 p-3.5 rounded-2xl border border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-300 text-[11px] font-bold">{currentEndpoint.name}</span>
                <span className="px-2.5 py-0.5 text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800/40 rounded-full font-bold">
                  HTTP/2
                </span>
              </div>

              {/* Headers */}
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">Request Headers</span>
                <div className="bg-neutral-900 p-3.5 rounded-2xl border border-neutral-800 text-[11px] text-neutral-300 space-y-1">
                  {Object.entries(currentEndpoint.headers).map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-neutral-500">{k}:</span>
                      <span className="text-neutral-200">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Payload */}
              {currentEndpoint.requestBody && (
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">Request Body (JSON)</span>
                  <div className="bg-neutral-900 p-3.5 rounded-2xl border border-neutral-800 text-[11px] text-neutral-300 overflow-x-auto">
                    <pre className="text-neutral-200">{JSON.stringify(currentEndpoint.requestBody, null, 2)}</pre>
                  </div>
                </div>
              )}
            </div>

            {/* Response Panel */}
            <div className="p-6 sm:p-8 space-y-4 bg-[#18181C]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Execution Output</span>
                {response && (
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> {response.status} {response.statusText}
                    </span>
                    <span className="text-neutral-300 bg-neutral-800 px-2.5 py-0.5 rounded-full border border-neutral-700 font-mono">
                      Latency: {response.executionTimeMs}ms
                    </span>
                  </div>
                )}
              </div>

              {response ? (
                <div className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800 overflow-x-auto text-[11px] h-[300px] overflow-y-auto">
                  <pre className="text-emerald-400 leading-relaxed">
                    {JSON.stringify(response.data, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="h-[300px] rounded-2xl border border-dashed border-neutral-800 flex flex-col items-center justify-center p-6 text-center text-neutral-400 space-y-2">
                  <Terminal className="w-8 h-8 text-[#FF5500]" />
                  <p className="text-xs">Click <strong className="text-white">&quot;Execute Request&quot;</strong> above to test microservice telemetry and JSON contract.</p>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400 border-t border-neutral-800">
                <span className="flex items-center gap-1">
                  <Server className="w-3 h-3 text-[#FF5500]" /> Pod: us-east-k8s-01
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#FF5500]" /> P99 Latency: 18ms
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
