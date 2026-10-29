import { useState } from "react";
import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

export function Settings() {
  const [profile, setProfile] = useState({
    username: "Justin",
    phone: "010 2469 4424",
    address: "Downtown, Dubai",
    description: "The best meal",
  });
  const [avatar, setAvatar] = useState("/img/justin.webp");
  const [saved, setSaved] = useState(false);

  const updateProfile = (field: keyof typeof profile, value: string) => {
    setProfile((current) => ({ ...current, [field]: value }));
    setSaved(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  return (
    <Box className={"settings"}>
      <Box className={"member-media-frame"}>
        <img src={avatar} className={"mb-image"} alt="Profile preview" />
        <div className={"media-change-box"}>
          <span>Upload image</span>
          <p>JPG, JPEG, PNG formats only!</p>
          <div className={"up-del-box"}>
            <Button component="label">
              <CloudDownloadIcon />
              <input type="file" accept="image/jpeg,image/png" hidden onChange={handleImageChange} />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Username</label>
          <input
            className={"spec-input mb-nick"}
            type="text"
            placeholder={"Username"}
            value={profile.username}
            onChange={(event) => updateProfile("username", event.target.value)}
            name="memberNick"
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"short-input"}>
          <label className={"spec-label"}>Phone</label>
          <input
            className={"spec-input mb-phone"}
            type="text"
            placeholder={"no phone"}
            value={profile.phone}
            onChange={(event) => updateProfile("phone", event.target.value)}
            name="memberPhone"
          />
        </div>
        <div className={"short-input"}>
          <label className={"spec-label"}>Address</label>
          <input
            className={"spec-input  mb-address"}
            type="text"
            placeholder={"no address"}
            value={profile.address}
            onChange={(event) => updateProfile("address", event.target.value)}
            name="memberAddress"
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Description</label>
          <textarea
            className={"spec-textarea mb-description"}
            placeholder={"no description"}
            value={profile.description}
            onChange={(event) => updateProfile("description", event.target.value)}
            name="memberDesc"
          />
        </div>
      </Box>
      <Box className={"save-box"}>
        <Button variant={"contained"} onClick={() => setSaved(true)}>
          {saved ? "Saved" : "Save"}
        </Button>
      </Box>
    </Box>
  );
}
