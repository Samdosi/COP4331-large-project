const express = require("express");
const router = express.Router();

const { auth_jwt } = require("../middleware/auth_jwt");
const { create_profile, get_profile, edit_profile, upload_image } = require("../controllers/profile");
const { validateInput } = require("../middleware/validateInput");
const { getUser } = require("../controllers/user");

const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", auth_jwt, async (req, res) => {
    //TODO CHECK THIS
    if (!req.body.user_req.profile) {
        const user = await getUser(req.body.user_id);
        await get_profile(user.profile, res);
    }
    else {
        await get_profile(req.body.user_req.profile_id, res);
    }
});

router.post("/", validateInput, auth_jwt, async (req, res) => {
    await create_profile(req, res);
});

router.put("/", validateInput, auth_jwt, async (req, res) => {
    await edit_profile(req, res);
});

router.post("/image-upload", upload.single("file"), async (req, res) => {
    await upload_image(req, res);
});


module.exports = router;