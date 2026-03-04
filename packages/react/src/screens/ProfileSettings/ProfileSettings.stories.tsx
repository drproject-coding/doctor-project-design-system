import { Meta, StoryObj } from "@storybook/react";
import { ProfileAccount } from "./ProfileAccount";
import { ProfileNotifications } from "./ProfileNotifications";
import { ProfileSecurity } from "./ProfileSecurity";
import { ProfileSocial } from "./ProfileSocial";

const metaAccount: Meta<typeof ProfileAccount> = {
  component: ProfileAccount,
  title: "Screens/ProfileSettings/Account",
};

const metaNotifications: Meta<typeof ProfileNotifications> = {
  component: ProfileNotifications,
  title: "Screens/ProfileSettings/Notifications",
};

const metaSecurity: Meta<typeof ProfileSecurity> = {
  component: ProfileSecurity,
  title: "Screens/ProfileSettings/Security",
};

const metaSocial: Meta<typeof ProfileSocial> = {
  component: ProfileSocial,
  title: "Screens/ProfileSettings/Social",
};

export default metaAccount;
type Story = StoryObj<typeof ProfileAccount>;

export const Account: Story = {};
export const Notifications: Story = {
  render: () => <ProfileNotifications />,
};
export const Security: Story = {
  render: () => <ProfileSecurity />,
};
export const Social: Story = {
  render: () => <ProfileSocial />,
};
