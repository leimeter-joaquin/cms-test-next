import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.CONTENTFUL_PREVIEW_API_SECRET) {
    console.log("Invalid token");
    return res.status(401).json({ message: "Invalid token" });
  }

  // This line creates a cookie that tells Next we are in preview mode.
  res.setPreviewData({});

  res.redirect("/");
}
