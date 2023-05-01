import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: any, res: NextApiResponse) {
  // This line creates a cookie that tells Next we are in preview mode.
  res.setPreviewData({});

  res.status(200).json({ text: "Hello" });
  res.end();
}
