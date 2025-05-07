export const config: Config = {
  profiles: [
    {
      description: "Access Operational Database",
      attribute: "custom:accessbotProduction",
      canSelfApprove: true,
      confirmSelfApproval: true,
      approverEmails: [
        "itamar@onyx.security",
      ],
      notifyChannel: "C08RZ9G55JL",
    },
  ],
};

export type Config = {
  /**
   * Profiles must be a non-empty set of configuration.
   */
  profiles: [Profile, ...Profile[]];
};

export type Profile = {
  /**
   * The human-readable name for the profile being granted access to by the attribute.
   * @example "Production"
   */
  description: string;
  /**
   * The tailscale attribute added to a device for the selected duration, upon
   * the request being approved.
   */
  attribute: string;

  /**
   * The maximum duration to offer the user when they are requesting access to
   * this profile.
   * @default 86400 (1 day, can be increased to 7*86400 for 7 days)
   */
  maxSeconds?: number;
  /**
   * The channel identifier to post approve/deny updates to.
   * @example "CQ12VV345"
   * @default undefined (meaning no public channel updates)
   */
  notifyChannel?: string;

  /**
   * Email addresses of people who may approve an access request. These are
   * looked-up to find the relevant slack users.
   * @default undefined (meaning anybody can approve)
   */
  approverEmails?: string[];

  /**
   * Whether a user can mark themselves as the approver for a request.
   * @default false
   */
  canSelfApprove?: boolean;

  /**
   * Whether a user self-approving is prompted to approve their own access
   * request. Can be set to true to show them the prompt anyway.
   * @default false (skip self-approval)
   */
  confirmSelfApproval?: boolean;
};
