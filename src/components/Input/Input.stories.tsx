import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Account name",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter account name",
  },
};

export const WithHint: Story = {
  args: {
    hint: "Use the name shown on the account.",
    placeholder: "Enter account name",
  },
};

export const Error: Story = {
  args: {
    error: "Enter an account name.",
    placeholder: "Enter account name",
  },
};