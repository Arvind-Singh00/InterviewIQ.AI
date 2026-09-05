const summarizeBody = (body = {}) => {
    const summary = {};

    for (const [key, value] of Object.entries(body)) {
        if (key === "resumeText" && typeof value === "string") {
            summary.resumeTextLength = value.length;
        } else if (Array.isArray(value)) {
            summary[key] = { type: "array", length: value.length };
        } else if (typeof value === "string") {
            summary[key] = value.length > 120 ? `${value.slice(0, 120)}...` : value;
        } else {
            summary[key] = value;
        }
    }

    return summary;
};

const requestLogger = (req, res, next) => {
    const startedAt = Date.now();

    res.on("finish", () => {
        if (!req.originalUrl.startsWith("/api/") || res.statusCode < 400) {
            return;
        }

        console.warn("[api-error]", {
            method: req.method,
            path: req.originalUrl,
            status: res.statusCode,
            durationMs: Date.now() - startedAt,
            origin: req.headers.origin,
            hasCookieHeader: Boolean(req.headers.cookie),
            userId: req.userId || null,
            body: summarizeBody(req.body)
        });
    });

    next();
};

export default requestLogger;
