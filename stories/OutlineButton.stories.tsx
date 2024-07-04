import type { Meta, StoryObj } from "@storybook/react";
import styles from "@/modules/common/components/OutlineButton/styles.module.css";
import OutlineButton from "@/modules/common/components/OutlineButton";

const meta: Meta<typeof OutlineButton> = {
  title: "Components/OutlineButton",
  component: OutlineButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    borderColor: { control: "color" },
    width: { control: "text" },
    height: { control: "text" },
    borderRadius: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
    borderColor: "blue",
    width: "150px",
    height: "50px",
    borderRadius: "10px",
    sx: styles.root,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    borderColor: "gray",
    width: "150px",
    height: "50px",
    borderRadius: "10px",
    disabled: true,
    sx: styles.root,
  },
};

export const CustomStyles: Story = {
  args: {
    children: "Custom",
    borderColor: "green",
    width: "200px",
    height: "60px",
    borderRadius: "15px",
    sx: styles.root,
  },
};
