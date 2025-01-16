import express from "express"
import { editSectionWithGeminiAI, editElementWithGeminiAI } from "./gemini_api.mjs"
const router = express.Router()

// GET /api/ai
router.get("/", async (req, res) => {
    res.json({test: "Hello from the AI router!"})
})

router.post("/section", async (req, res) => {
    // const aiRes = await askOpenAI(prompt, history, textHistory, currentSection)
    const aiRes = await editSectionWithGeminiAI(req.body)

    res.json(aiRes)
})


router.post("/element", async (req, res) => {
    // const aiRes = await askOpenAI(prompt, history, textHistory, currentSection)
    const aiRes = await editElementWithGeminiAI(req.body)

    res.json(aiRes)
})


export default router
