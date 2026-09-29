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

export function SystemSimulator() {
  const DEFAULT_URL = "https://api.janaka.dev/v1/hexuniverse/listings?campus=uoc.lk";

  const [method, setMethod] = useState<HttpMethod>("GET");
  const [url, setUrl] = useState<string>("");
  const [headers, setHeaders] = useState<HeaderItem[]>([
    { key: "Content-Type", value: "application/json", enabled: true },
    { key: "Accept", value: "application/json", enabled: true }
  ]);
  const [body, setBody] = useState<string>(
    JSON.stringify(
      {
        campus: "uoc.lk",
        filter: "software_engineering",
        active_user: "undergrad_dev"
      },
      null,
      2
    )
  );

  const [activeTab, setActiveTab] = useState<"params" | "headers" | "body">("params");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const methodsList: HttpMethod[] = ["GET", "POST", "PUT", "DELETE"];

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
    const startTime = performance.now();
    const targetUrl = url.trim() || DEFAULT_URL;

    const activeHeaders: Record<string, string> = headers
      .filter((h) => h.enabled && h.key)
      .reduce((acc, h) => ({ ...acc, [h.key]: h.value }), {});

    let parsedPayload: any = null;
    if (method !== "GET" && body.trim()) {
      try {
        parsedPayload = JSON.parse(body);
      } catch {
        parsedPayload = body;
      }
    }

    // Try real fetch if endpoint is an actual http(s) URL
    if (url.trim().startsWith("http://") || url.trim().startsWith("https://")) {
      try {
        const fetchOptions: RequestInit = {
          method: method,
          headers: activeHeaders
        };

        if (method !== "GET" && body.trim()) {
          fetchOptions.body = typeof parsedPayload === "string" ? parsedPayload : JSON.stringify(parsedPayload);
        }

        const res = await fetch(targetUrl, fetchOptions);
        const endTime = performance.now();
        const latencyMs = Math.round(endTime - startTime);

        let data;
        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          data = await res.json();
        } else {
          const text = await res.text();
          try {
            data = JSON.parse(text);
          } catch {
            data = text;
          }
        }

        const resHeaders: Record<string, string> = {};
        res.headers.forEach((value, key) => {
          resHeaders[key] = value;
        });

        setResponse({
          status: res.status,
          statusText: res.statusText || (res.ok ? "OK" : "Response"),
          size: `${(JSON.stringify(data).length / 1024).toFixed(1)} KB`,
          executionTimeMs: latencyMs,
          headers: resHeaders,
          data: data
        });
        setLoading(false);
        return;
      } catch (err: any) {
        console.warn("Fetch fallback to structured response:", err);
      }
    }

    // Fallback response generator for custom / demo endpoints
    const simulatedLatency = Math.floor(Math.random() * 18) + 12;
    setTimeout(() => {
      setResponse({
        status: method === "POST" ? 201 : method === "DELETE" ? 204 : 200,
        statusText: method === "POST" ? "Created" : method === "DELETE" ? "No Content" : "OK",
        size: "1.2 KB",
        executionTimeMs: simulatedLatency,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "x-powered-by": "Next.js / Node.js API Gateway",
          "x-cors-status": "enabled"
        },
        data: {
          request_summary: {
            method: method,
            endpoint: targetUrl,
            headers_sent: activeHeaders,
            payload: parsedPayload || undefined
          },
          response_meta: {
            timestamp: new Date().toISOString(),
            environment: "Production (API Gateway)",
            developer: "T.M. Janaka Namal Thennakoon (Backend Developer)"
          },
          result: {
            status: "SUCCESS",
            message: `HTTP ${method} execution completed successfully.`,
            authenticated: true
          }
        }
      });
      setLoading(false);
    }, 500);
  };

  const handleCopyResponse = () => {
    if (response?.data) {
      navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
              Interactive <span className="text-[#FF5500]">API Endpoint Tester</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Test RESTful endpoints, configure custom HTTP methods, edit request headers & JSON body payloads in real-time.
            </p>
          </div>

          {/* HTTP Method Selector Buttons (Selects method without changing URL) */}
          <div className="flex flex-wrap items-center gap-2.5">
            {methodsList.map((m) => {
              const isSelected = method === m;
              return (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={`relative group px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 border ${
                    isSelected
                      ? m === "GET"
                        ? "bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-500/30"
                        : m === "POST"
                        ? "bg-[#FF5500] text-white border-[#FF5500] shadow-lg shadow-[#FF5500]/25 ring-2 ring-[#FF5500]/30"
                        : m === "PUT"
                        ? "bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/25 ring-2 ring-amber-500/30"
                        : "bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-500/25 ring-2 ring-rose-500/30"
                      : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400 shadow-sm"
                  }`}
                >
                  {/* Animated Ping Indicator */}
                  <span className="relative flex h-2 w-2">
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        isSelected
                          ? "bg-white"
                          : m === "GET"
                          ? "bg-emerald-500"
                          : m === "POST"
                          ? "bg-[#FF5500]"
                          : m === "PUT"
                          ? "bg-amber-500"
                          : "bg-rose-500"
                      }`}
                    />
                  </span>

                  {/* Method Name Only */}
                  <span className="font-extrabold uppercase tracking-wider text-xs">
                    {m}
                  </span>
                </button>
              );
            })}
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

            {/* URL Input with Default / Placeholder */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://api.janaka.dev/v1/hexuniverse/listings?campus=uoc.lk"
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
                      <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">REST API Configuration</div>
                      <p className="text-neutral-200 font-sans leading-relaxed">
                        Configure HTTP request methods, headers, and JSON body parameters to test your backend endpoints.
                      </p>
                    </div>

                    <div className="bg-neutral-900/50 p-4 rounded-2xl border border-neutral-800/80 space-y-1.5 text-neutral-400 text-[11px]">
                      <div className="flex justify-between">
                        <span>Selected Method:</span>
                        <strong className="text-white font-mono">{method}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Target Endpoint:</span>
                        <strong className="text-neutral-300 font-mono truncate max-w-[240px]">{url || DEFAULT_URL}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Protocol:</span>
                        <strong className="text-emerald-400 font-mono">HTTPS / RESTful API</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Headers Config Table */}
                {activeTab === "headers" && (
                  <div className="space-y-3">
                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 custom-dark-scrollbar">
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
                      className="w-full p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-mono text-[11px] focus:outline-none focus:border-[#FF5500] transition-colors resize-none leading-relaxed custom-dark-scrollbar"
                    />
                  </div>
                )}
              </div>

              {/* Bottom Specs Note */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#FF5500]" /> RESTful API Engine
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FF5500]" /> Real-Time Response
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
                        {response.size}
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

                    <div className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800 overflow-x-auto text-[11px] h-[310px] overflow-y-auto custom-dark-scrollbar">
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
                        Enter your endpoint URL, headers, and payload above, then click <strong className="text-white">&quot;Send Request&quot;</strong>.
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
                  Status: {loading ? "Sending..." : response ? "200 Success" : "Idle"}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
