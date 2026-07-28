import enMessages from "./en.json";
import baseMessages from "./zh-CN.json";
import coreSettings from "./zh-CN-complete/01-core-settings.json";
import toolbarProjectQueue from "./zh-CN-complete/02-toolbar-project-queue.json";
import toolbarSides from "./zh-CN-complete/02a-toolbar-sides.json";
import sessionRecapsCache from "./zh-CN-complete/03-session-recaps-cache.json";
import sessionSharingWarnings from "./zh-CN-complete/04-session-sharing-warnings.json";
import sessionToolbarRuntime from "./zh-CN-complete/05-session-toolbar-runtime.json";
import approvalProcessGit from "./zh-CN-complete/06-approval-process-git.json";
import sourceReview from "./zh-CN-complete/07a-source-review.json";
import sourceControlActions from "./zh-CN-complete/07b-source-control-actions.json";
import modelCommandDevice from "./zh-CN-complete/08-model-command-device.json";
import connectivityNotifications from "./zh-CN-complete/09-connectivity-notifications.json";
import hostProvidersSpeech from "./zh-CN-complete/10a-host-providers-speech.json";
import developmentSharing from "./zh-CN-complete/10b-development-sharing.json";
import contextDeliveryWebhooks from "./zh-CN-complete/11a-context-delivery-webhooks.json";
import executorsAboutModel from "./zh-CN-complete/11b-executors-about-model.json";
import localAccessAgentsFiles from "./zh-CN-complete/12-local-access-agents-files.json";
import remoteSetup from "./zh-CN-complete/13-remote-setup.json";

/**
 * Complete Simplified Chinese catalog.
 *
 * The split fallback catalogs cover every English key. The existing upstream
 * zh-CN catalog is spread last so its established translations remain the
 * source of truth, while newly introduced or still-missing keys no longer
 * fall back to English at runtime.
 */
const completeMessages = {
  ...coreSettings,
  ...toolbarProjectQueue,
  ...toolbarSides,
  ...sessionRecapsCache,
  ...sessionSharingWarnings,
  ...sessionToolbarRuntime,
  ...approvalProcessGit,
  ...sourceReview,
  ...sourceControlActions,
  ...modelCommandDevice,
  ...connectivityNotifications,
  ...hostProvidersSpeech,
  ...developmentSharing,
  ...contextDeliveryWebhooks,
  ...executorsAboutModel,
  ...localAccessAgentsFiles,
  ...remoteSetup,
  ...baseMessages,
} satisfies Record<keyof typeof enMessages, string>;

export default completeMessages;
