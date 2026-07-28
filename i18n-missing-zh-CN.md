# Missing i18n Translations

Advisory report. Missing sparse-locale keys fall back to English at runtime.

English keys: 2278
Total missing: 999

| Locale | Translated | Missing | Coverage |
| --- | ---: | ---: | ---: |
| `zh-CN` | 1279 | 999 | 56.1% |

## zh-CN.json

999 missing, 1279 translated (56.1% coverage).

| Key | English |
| --- | --- |
| `workstreamsTitle` | Workstreams |
| `workstreamsLoading` | Loading workstreams... |
| `workstreamsLoadFailed` | Failed to load workstreams |
| `workstreamsPreviewFailed` | Failed to preview checkout destination |
| `workstreamsNewAction` | New workstream |
| `workstreamsCreateAction` | Create |
| `workstreamsCreatingAction` | Creating... |
| `workstreamsCreateFailed` | Failed to create workstream |
| `workstreamsCreateBusy` | Another workstream operation is already running for this project. |
| `workstreamsLabelLabel` | Label |
| `workstreamsLabelPlaceholder` | Short description |
| `workstreamsDestinationLabel` | Destination |
| `workstreamsDestinationLoading` | Checking destination... |
| `workstreamsDestinationPending` | Enter a label |
| `workstreamsDisabledTitle` | Workstreams are turned off |
| `workstreamsDisabledDescription` | This page is not enabled on this server. |
| `workstreamsSettingsErrorTitle` | Workstream settings unavailable |
| `workstreamsErrorTitle` | Workstreams could not be loaded |
| `workstreamsNoAccessTitle` | Project unavailable |
| `workstreamsNoAccessDescription` | This project is unavailable or cannot be shown here. |
| `workstreamsEmptyTitle` | No checkout lanes |
| `workstreamsEmptyDescription` | No checkout lanes are stored for this project. |
| `workstreamsNoCheckoutsTitle` | No checkout lanes yet |
| `workstreamsNoCheckoutsDescription` | Only the main checkout is listed for this project. |
| `workstreamsTableLabel` | Project workstreams |
| `workstreamsColumnLane` | Lane |
| `workstreamsColumnKind` | Kind |
| `workstreamsColumnBranch` | Branch |
| `workstreamsColumnQueue` | Queue |
| `workstreamsColumnStatus` | Status |
| `workstreamsColumnSessions` | Sessions |
| `workstreamsColumnPath` | Path |
| `workstreamsKindMain` | Main |
| `workstreamsKindCheckout` | Checkout |
| `workstreamsQueuePaused` | Paused |
| `workstreamsQueueRunning` | Running |
| `workstreamsStatusActive` | Active |
| `workstreamsStatusArchived` | Archived |
| `workstreamsStatusLanded` | Landed |
| `workstreamsValueNone` | None |
| `workstreamsSessionsUnavailable` | Linked sessions unavailable |
| `explorationTitlePending` | Exploring |
| `explorationTitleComplete` | Explored |
| `explorationItemCountOne` | {count} item |
| `explorationItemCountMany` | {count} items |
| `explorationCollapse` | Collapse explored tools |
| `explorationExpand` | Expand explored tools |
| `explorationShowCommandDetails` | Show command details |
| `explorationHideCommandDetails` | Hide command details |
| `explorationLine` | line {line} |
| `explorationLineRange` | lines {start}-{end} |
| `sidebarSectionPendingSessions` | Pending Sessions |
| `sidebarHiddenDuplicateSessions` | {count} hidden (duplicate titles) |
| `settingsAppearanceDescription` | Theme, font size, display |
| `settingsPerformanceTitle` | Performance |
| `settingsPerformanceDescription` | Rendering, caching, memory |
| `settingsToolbarTitle` | Toolbar |
| `settingsToolbarDescription` | Composer controls to show |
| `settingsCacheMissBillingTitle` | Cache Billing |
| `settingsCacheMissBillingDescription` | Prompt-cache accounting |
| `settingsMessageDeliveryTitle` | Message Delivery |
| `settingsMessageDeliveryDescription` | Queued send batching, anchors |
| `settingsEnvironmentTitle` | Environment |
| `settingsEnvironmentDescription` | Startup environment variables |
| `environmentSectionTitle` | Environment variables |
| `environmentSectionDescription` | Documented variables that configure this server at startup. Changes take effect only after a restart, so these are read-only here. Secret values are shown redacted and never sent to your browser in full. |
| `environmentLoading` | Loading… |
| `environmentLoadError` | Couldn't load environment variables. |
| `environmentSecretBadge` | secret |
| `environmentValueNotSet` | not set |
| `environmentValueEmpty` | (empty) |
| `appearanceSettingsIconStyleTitle` | Settings Icons |
| `appearanceSettingsIconStyleDescription` | Choose the Settings category icon set for this browser. |
| `appearanceSettingsIconStyleFlat` | Flat |
| `appearanceSettingsIconStyleFlatWhite` | Flat White |
| `appearanceSettingsIconStyleEmoji` | Emoji |
| `appearanceToolbarSettingsShortcutTitle` | Toolbar Settings |
| `appearanceToolbarSettingsShortcutDescription` | Configure composer toolbar controls, the default busy action, and the collapsed mobile action. |
| `appearanceToolbarSettingsShortcutAction` | Open Toolbar |
| `appearanceOutputTypographyReset` | Reset typography |
| `outputProseFontInter` | Inter |
| `outputProseFontAlegreyaSans` | Alegreya Sans |
| `appearanceContentWidthUnit` | px |
| `appearanceGeneratedTitlesTitle` | Generated Titles |
| `appearanceGeneratedTitlesDescription` | Show a button by the session title that generates a short title using the agent. Off by default since it consumes tokens. |
| `appearanceTooltipDelayTitle` | Tooltip Style and Delay |
| `appearanceTooltipDelayDescription` | Theme-matched tooltips appear after the pointer rests for this delay. Session preview cards wait three times longer; moving to an adjacent tooltip after one opens is instant. |
| `appearanceTooltipModeTitle` | Tooltip style |
| `appearanceTooltipModeThemed` | Themed |
| `appearanceTooltipModeNative` | Native |
| `appearanceTooltipDelayUnit` | ms |
| `appearanceTooltipReset` | Reset tooltip delay |
| `appearanceHoverCardHeightTitle` | Hover Card Max Height |
| `appearanceHoverCardHeightDescription` | Maximum height of the session row preview card; taller shows more of the opening request. |
| `appearanceHoverCardHeightUnit` | px |
| `appearanceHoverCardLineUnit` | line |
| `appearanceHoverCardLinesUnit` | lines |
| `appearanceHoverCardReset` | Reset |
| `appearanceSessionLoadingProgressTitle` | Session Loading Progress |
| `appearanceSessionLoadingProgressDescription` | Show detailed loading phases for large sessions and reveal long transcripts after a progress bar reaches 100%. |
| `appearanceQuoteReplyButtonsTitle` | > Reply Buttons |
| `appearanceQuoteReplyButtonsDescription` | Choose between one block-level reply button, per-paragraph buttons on hover, or per-paragraph buttons always shown. |
| `appearanceQuoteReplyButtonsBlock` | Block only |
| `appearanceQuoteReplyButtonsParagraphHover` | On hover |
| `appearanceQuoteReplyButtonsParagraphAlways` | Always |
| `appearanceSidebarDuplicateHidingTitle` | Hide Duplicate Sidebar Sessions |
| `appearanceSidebarDuplicateHidingDescription` | Group duplicate recent and older sidebar rows behind a hidden count. Disable to show every duplicate session. |
| `performanceSectionTitle` | Performance |
| `performanceSectionDescription` | Tune client-side rendering and route retention for large sessions. These settings are local to this browser. |
| `performanceKeepRecentSessionMountedTitle` | Keep Recent Session Mounted |
| `performanceKeepRecentSessionMountedDescription` | Keep the most recently viewed session mounted briefly after leaving it so returning can be instant. Disable to reduce memory use. |
| `performanceActiveWindowTrimTitle` | Unload Older Transcript Messages |
| `performanceActiveWindowTrimDescription` | Automatically unload older transcript messages while following the live tail to limit memory growth. Full history remains available with Load older. |
| `performanceOffscreenTranscriptRenderingTitle` | Off-Screen Transcript Rendering |
| `performanceOffscreenTranscriptRenderingDescription` | Experimentally skip rendering transcript rows outside the viewport to reduce memory use. This is off by default because rows can jump as they come into view. |
| `performanceTranscriptCacheTitle` | Session Transcript Cache |
| `performanceTranscriptCacheDescription` | Memory budget for keeping recent session transcripts in memory so returning is fast. Off forces fresh loads. |
| `performanceTranscriptCacheMbValue` | {count} MB |
| `performanceTranscriptCacheEquivalentLast` | ≈ {count} sessions the size of your last viewed ({size} MB) |
| `performanceTranscriptCacheEquivalentTypical` | ≈ {count} typical sessions (~{size} MB each) |
| `performanceTranscriptCacheCurrentUsage` | Current memory: {warmSize} MB warm cache, {liveSize} MB live sessions |
| `performanceTranscriptCacheTtlTitle` | Transcript Cache Lifetime |
| `performanceTranscriptCacheTtlDescription` | How long an unvisited cached transcript stays in memory before it is freed. |
| `performanceTranscriptCacheTtlHoursValue` | {count} h |
| `performanceTranscriptCacheTtlDaysValue` | {count} d |
| `appearanceToolbarHiddenHeading` | Hidden |
| `appearanceToolbarHiddenDescription` | Off. Slide right to put one back on the toolbar. |
| `appearanceToolbarShownHeading` | Shown |
| `appearanceToolbarShownDescription` | On the toolbar, in left-to-right order. Slide left to hide a control, or right to keep it visible longer when space is tight. |
| `appearanceToolbarSideLeft` | Left side |
| `appearanceToolbarSideRight` | Right side |
| `appearanceToolbarSideNoneHidden` | None hidden |
| `appearanceToolbarPresenceAria` | {control} visibility |
| `appearanceToolbarPresenceHiddenCaption` | Not shown on the toolbar. |
| `appearanceToolbarPresenceFirstCaption` | Moves to the More (...) menu first when space is tight. |
| `appearanceToolbarPresenceMidCaption` | Moves to the More (...) menu after the first controls. |
| `appearanceToolbarPresenceLastCaption` | Stays visible longer, then moves to the More (...) menu near the end. |
| `appearanceToolbarPresencePinCaption` | Always visible; never moves to the More (...) menu. |
| `appearanceToolbarPresenceShownCaption` | Always visible on the toolbar. |
| `appearanceToolbarActivateControl` | Edit {control} |
| `appearanceToolbarHide` | Hide |
| `appearanceToolbarShowAlways` | Show always |
| `appearanceToolbarDefaultActionTitle` | Default Busy Send |
| `appearanceToolbarDefaultActionDescription` | What Enter and the primary button do while an agent is running. Per-session swaps still override it. |
| `appearanceToolbarDefaultActionSteer` | Steer current turn |
| `appearanceToolbarDefaultActionQueue` | Queue message |
| `appearanceToolbarCollapsedButtonTitle` | Mini-composer Button |
| `appearanceToolbarCollapsedButtonDescription` | Which trailing action the collapsed composer shows on tight layouts. |
| `appearanceToolbarCollapsedButtonPrimary` | Default action |
| `appearanceToolbarCollapsedButtonAlternate` | Alternate action |
| `appearanceToolbarCollapsedButtonMicrophone` | Microphone |
| `appearanceToolbarConversationViewTitle` | Conversation View |
| `appearanceToolbarConversationViewDescription` | Show a chat button that switches between the full activity transcript and a condensed conversation. |
| `appearanceToolbarWaveformTitle` | Live Microphone Waveform |
| `appearanceToolbarWaveformDescription` | Show a live audio waveform in unused center space while recording. |
| `appearanceToolbarProjectQueueTitle` | Current-session Project Queue |
| `appearanceToolbarProjectQueueDescription` | Show the contextual Project Queue button that sends the draft to the current session after the whole project goes idle. |
| `appearanceToolbarProjectQueueNewSessionShortcutTitle` | Queue as New Session Shortcut |
| `appearanceToolbarProjectQueueNewSessionShortcutDescription` | Show the + shortcut in an existing session's composer that queues the draft to start a separate session after the whole project goes idle. The New Session page is unaffected. |
| `processingThinkingRightClickShowExpandAll` | Right-click: show thinking and expand all blocks |
| `processingThinkingRightClickExpandAll` | Right-click: expand all thinking blocks, including earlier ones |
| `processingThinkingRightClickLatestOnly` | Right-click: auto-expand only the latest thinking block |
| `composerModelChipTitle` | Model for this session — click to change |
| `floatingComposerModelChipTitle` | Model a new session will start with — adjust it on the New Session page |
| `projectQueueTitle` | Project Queue |
| `projectQueueDescription` | Messages waiting for the whole project to go idle. |
| `projectQueuePausedDescription` | Dispatch is paused. Resume explicitly, or use an item action to resume automatically. |
| `projectQueuePausedAfterRestartDescription` | Dispatch is paused after server restart. |
| `projectQueuePausedNotice` | Project Queue dispatch is paused. Resume explicitly, or use an item action to resume automatically. |
| `projectQueuePausedAfterRestartNotice` | Project Queue dispatch was paused because the server restarted with queued work still pending. Resume explicitly, or use an item action to resume automatically. |
| `projectQueuePausedNoticeWithDelay` | Project Queue dispatch is paused. After dispatch resumes, the next item may still wait up to {duration} for project quiet before starting. |
| `projectQueuePausedAfterRestartNoticeWithDelay` | Project Queue dispatch was paused because the server restarted with queued work still pending. After dispatch resumes, the next item may still wait up to {duration} for project quiet before starting. |
| `projectQueueCount` | {count} queued |
| `projectQueueRefreshing` | Refreshing... |
| `projectQueueLoadError` | Project queue error: {message} |
| `projectQueueRecoveredTitle` | Paused Session Queue |
| `projectQueueRecoveredCount` | {count} paused |
| `projectQueueUnknownProject` | Unknown project |
| `projectQueueAttachmentOnly` | Attachment-only message |
| `projectQueueTargetNewSession` | New session |
| `projectQueueTargetSession` | Session {sessionId} |
| `projectQueueStatusQueued` | Queued |
| `projectQueueStatusDispatching` | Sending |
| `projectQueueStatusFailed` | Failed |
| `projectQueueStartNow` | Start now |
| `projectQueueForceStart` | Force start |
| `projectQueuePromoting` | Starting... |
| `projectQueueStartNowTitle` | Try this Project Queue item now without waiting for the quiet window. |
| `projectQueueForceStartTitle` | Start despite current blockers: {blockers} |
| `projectQueueReadinessSeconds` | {seconds}s |
| `projectQueueReadinessPaused` | Dispatch paused. |
| `projectQueueReadinessBlocked` | Blocked: {blockers} |
| `projectQueueReadinessWaitingQuiet` | Waiting for project quiet: {duration} remaining. |
| `projectQueueReadinessReady` | Ready to start. |
| `projectQueueReadinessDispatching` | Dispatching now. |
| `projectQueueReadinessEmpty` | No queued project work. |
| `projectQueueBlockerInTurn` | {session} in turn |
| `projectQueueBlockerWaitingInput` | {session} waiting for input |
| `projectQueueBlockerProviderRetained` | {session} retaining provider work |
| `projectQueueBlockerDirectQueue` | {session} direct queue |
| `projectQueueBlockerDeferredQueue` | {session} deferred queue |
| `projectQueueBlockerPendingInput` | {session} pending input |
| `projectQueueBlockerLiveness` | {session} liveness {status} |
| `projectQueueBlockerExternal` | {session} externally active |
| `projectQueueBlockerWorkerQueue` | worker queue |
| `projectQueueBlockerRecoveredSessionQueue` | {count} paused session queue item(s) |
| `projectQueueBlockerFirstFailed` | first queue item failed |
| `projectQueueBlockerUnknown` | {blocker} |
| `projectQueueBlockerMore` | {count} more |
| `projectQueueRetry` | Retry |
| `projectQueueEdit` | Edit |
| `projectQueueMoveToTop` | Move to top |
| `projectQueueSave` | Save |
| `projectQueueDiscard` | Discard |
| `projectQueuePause` | Pause |
| `projectQueueResume` | Resume |
| `projectQueueResumeFailed` | Failed to resume Project Queue: {message} |
| `projectQueueEditMessageLabel` | Project Queue message |
| `projectQueueCancel` | Cancel |
| `projectQueueDelete` | Delete |
| `projectQueueSubmitFailed` | Failed to queue for Project Queue: {message} |
| `projectQueueSessionQueuedToast` | Queued for Project Queue. |
| `projectQueueNewSessionQueuedToast` | Queued new session for Project Queue. |
| `projectQueueNewSessionNeedsProject` | Choose a project to use Project Queue. |
| `projectQueueNewSessionAttachmentsUnsupported` | Project Queue for new sessions does not support attachments yet. |
| `projectQueueNewSessionAttachmentsPreparing` | Wait for attachments to finish uploading. |
| `projectQueueInlineStatusQueued` | Project Queue (#{position}) |
| `projectQueueInlineStatusDispatching` | Project Queue sending (#{position}) |
| `projectQueueInlineStatusFailed` | Project Queue failed (#{position}) |
| `projectQueueInlineCopy` | Copy Project Queue message |
| `projectQueueInlineEdit` | Edit Project Queue item |
| `projectQueueInlineEditFailed` | Failed to edit Project Queue item: {message} |
| `projectQueueInlineSteer` | Steer Project Queue item now |
| `projectQueueInlineSteered` | Steered Project Queue item now. |
| `projectQueueInlineSteerFailed` | Failed to steer Project Queue item: {message} |
| `projectQueueInlineCancel` | Cancel Project Queue item |
| `projectQueueInlineCancelFailed` | Failed to cancel Project Queue item: {message} |
| `projectQueueSidebarBadge` | Project Queue |
| `toolbarProjectQueueLabel` | Queue for Project Queue |
| `toolbarProjectQueueTooltip` | Send after all sessions in this project are idle |
| `toolbarProjectQueueNewSessionLabel` | Queue as new session for Project Queue |
| `toolbarProjectQueueNewSessionTooltip` | Start a new session after all sessions in this project are idle |
| `projectQueueAgeJustNow` | just now |
| `projectQueueAgeMinutes` | {count}m ago |
| `projectQueueAgeHours` | {count}h ago |
| `projectQueueAgeDays` | {count}d ago |
| `projectCardQueueCount` | Project Queue items: {count} |
| `newSessionWorkstreamLabel` | Workstream |
| `newSessionWorkstreamMain` | Main checkout |
| `newSessionGatewayCatalogLoading` | Checking the configured gateway for models… |
| `newSessionGatewayCatalogUnavailable` | No models are available from the configured gateway. Check that it is running, then retry. |
| `newSessionGatewayCatalogRetry` | Retry |
| `recapModeNativeTimedDescription` | Use provider-native recaps after backgrounding (not closing) for {seconds} s. |
| `recapModeSideSessionTimedDescription` | Summarize tailed assistant output after backgrounding (not closing) for {seconds} s. |
| `recapModeForkTimedDescription` | Summarize from a temporary fork after backgrounding (not closing) for {seconds} s. |
| `recapAfterSecondsInlineNative` | Summarize provider-native recaps for backgrounded (not closed) sessions after |
| `recapAfterSecondsInlineSideSession` | Summarize tailed output for backgrounded (not closed) sessions after |
| `recapAfterSecondsInlineFork` | Summarize from a temporary fork for backgrounded (not closed) sessions after |
| `promptCacheKeepaliveTitle` | Prompt Cache |
| `promptCacheKeepaliveDescription` | Keep open {provider} sessions warm after idle time without changing transcript activity. |
| `promptCacheKeepaliveModeAuto` | On |
| `promptCacheKeepaliveModeAutoDescription` | Refresh after {minutes} min while a session view is open. |
| `promptCacheKeepaliveModeOff` | Off |
| `promptCacheKeepaliveModeOffDescription` | Do not run prompt-cache keepalive for this provider. |
| `promptCacheKeepaliveCadenceLabel` | Inactivity |
| `promptCacheKeepaliveCadenceAria` | Prompt-cache keepalive inactivity minutes |
| `promptCacheKeepaliveCadenceUnit` | min |
| `promptCacheKeepaliveSaved` | Saved prompt-cache keepalive |
| `promptCacheKeepaliveSaveError` | Failed to save prompt-cache keepalive |
| `cacheMissBillingTitle` | Cache Billing |
| `cacheMissBillingLoading` | Loading... |
| `cacheMissBillingDescription` | Record usage-accounting evidence when Claude or Codex reports cache reuse or a large uncached input on a fork or recently warm session. |
| `cacheMissBillingEnableTitle` | Track Cache Accounting |
| `cacheMissBillingEnableDescription` | Store a server-side log when provider usage confirms or violates YA's expected zero-cost retained prefix. |
| `cacheMissBillingToastTitle` | Popup on Miss |
| `cacheMissBillingToastDescription` | Show an in-app warning when a suspected cache-billing miss is recorded. |
| `cacheMissBillingClaudeFreshWindowTitle` | Claude Fresh Window |
| `cacheMissBillingClaudeFreshWindowDescription` | Expect zero uncached prefix cost for Claude forks and warm turns inside this window; YA launches Claude with one-hour prompt caching by default. |
| `cacheMissBillingCodexFreshWindowTitle` | Codex Fresh Window |
| `cacheMissBillingCodexFreshWindowDescription` | Expect zero uncached prefix cost for Codex forks and warm turns inside this conservative measured window. |
| `cacheMissBillingMinimumTokensTitle` | Minimum Uncached Input |
| `cacheMissBillingMinimumTokensDescription` | Ignore small turns below this provider-reported uncached input size. |
| `cacheMissBillingMinutesUnit` | min |
| `cacheMissBillingTokensUnit` | tokens |
| `cacheMissBillingEventsDescription` | Recent server-stored evidence. Open the linked session and use the recorded message position when checking provider accounting. |
| `cacheMissBillingFailuresTitle` | Unexpected recomputes |
| `cacheMissBillingSuccessesTitle` | Expected cache hits |
| `cacheMissBillingFailuresEmpty` | No unexpected recomputes recorded. |
| `cacheMissBillingSuccessesEmpty` | No expected cache hits recorded. |
| `cacheMissBillingEventsLoadError` | Failed to load cache-billing events. |
| `cacheMissBillingReasonForkMiss` | Fork prefix cache miss |
| `cacheMissBillingReasonWarmMiss` | Warm session cache miss |
| `cacheMissBillingReasonForkHit` | Fork prefix cache hit |
| `cacheMissBillingReasonWarmHit` | Warm session cache hit |
| `cacheMissBillingEventUsageMiss` | {provider} reported {tokens} uncached input tokens. |
| `cacheMissBillingEventUsageHit` | {provider} reused {tokens} cached input tokens. |
| `cacheMissBillingEventDetail` | {time} · {position} |
| `cacheMissBillingExpectedBasisFork` | byte-identical provider fork |
| `cacheMissBillingExpectedBasisWarm` | same-session byte-identical prefix |
| `cacheMissBillingExpectedCostDetail` | Expected input cost: 0 uncached prefix tokens ({basis}, {window} min window). |
| `cacheMissBillingEventMessageId` | message {messageId} |
| `cacheMissBillingEventMessageIndex` | live message #{index} |
| `cacheMissBillingEventMessageUnknown` | message position unknown |
| `cacheMissBillingToast` | {provider} reported {tokens} uncached input tokens where YA expected cache. |
| `cacheMissBillingOpenSession` | Open Session |
| `sessionDraftAttachmentsUnavailable` | Draft attachments were no longer available. |
| `sessionThinkingChangeFailed` | Failed to change thinking: {message} |
| `sessionUnconfirmedSteerCancelFailed` | Failed to cancel sent message: {message} |
| `sessionRecoveredQueuedPaused` | Paused after restart |
| `sessionRecoveredQueuedPausedTitle` | This queued patient message was recovered after a server restart and will not send until resumed. |
| `sessionRecoveredQueuedResume` | Resume recovered queued message |
| `sessionRecoveredQueuedResumeShort` | Resume |
| `sessionRecoveredQueuedResumeFailed` | Failed to resume recovered queued message: {message} |
| `sessionRecoveredQueuedDelete` | Delete recovered queued message |
| `sessionRecoveredQueuedDeleteShort` | Delete |
| `sessionRecoveredQueuedDeleteFailed` | Failed to delete recovered queued message: {message} |
| `sessionDeferredSteerFailed` | Failed to steer queued message: {message} |
| `sessionQuoteSelection` | Quote selection |
| `sessionQuoteSelectionShort` | Quote |
| `sessionQuoteBlock` | Quote this paragraph — or select text to comment on a range |
| `sessionQuoteComposerUnavailable` | Composer is not available. |
| `sessionQueuedCopy` | Copy queued message |
| `sessionQueuedEdit` | Edit queued message |
| `sessionQueuedCancel` | Cancel queued message |
| `sessionQueuedInlineEditLabel` | Edit queued message text |
| `sessionQueuedInlineSave` | Save edit |
| `sessionQueuedInlineCancel` | Cancel edit (Esc) |
| `sessionSteerNow` | Steer now |
| `sessionSteerQueuedMessageNow` | Steer queued message now |
| `sessionSteerQueuedMessageThrough` | Steer this and {count} earlier patient message{suffix} now |
| `sessionTitleSave` | Save title (Enter) |
| `sessionRecentSessions` | Recent sessions |
| `sessionGenerateNewTitle` | Generate new title |
| `sessionRetitleUseGenerated` | Use generated title |
| `sessionRetitleUseGeneratedWhenReady` | Use generated title when ready |
| `sessionRetitleSaveAsTyped` | Save title as typed (Ctrl+Enter) |
| `sessionRetitleCancel` | Cancel retitle (Esc) |
| `sessionRetitleGenerating` | Generating title... |
| `sessionRetitleDeferred` | Generating title; will save when ready... |
| `sessionRetitleProposalLabel` | Suggested: |
| `sessionRetitleFailed` | Failed to generate title |
| `sessionRetitleUnsupported` | Generated titles need transcript fork support for this provider. |
| `sessionPromptSuggestionsEnabled` | Suggestions enabled |
| `sessionPromptSuggestionsDisabled` | Suggestions disabled |
| `sessionPromptSuggestionsFailed` | Failed to update suggestions |
| `publicShareLiveSecretWarning` | WARNING: assistant read, edits, commands may leak secrets! |
| `publicShareReadOnlySecretCaution` | Read, edit, and command output shown so far should be considered public. |
| `sessionExternalWarningElapsed` | detected {duration} ago. |
| `sessionExternalWarningExplainTitle` | Why "at your own risk"? |
| `sessionExternalRiskIntro` | Another program — often an agent you started elsewhere (Claude, Codex, or Gemini in a terminal, an IDE extension, or another tool) — is currently writing to this conversation's transcript. Each session is a single file on disk, and if you also send from here, two programs append to that one file at once without coordinating. The likely effects: |
| `sessionExternalRiskUnseenLead` | The other program may not see your messages. |
| `sessionExternalRiskUnseenBody` |  A terminal or IDE session keeps the conversation in its own memory and generally won't reload the transcript when this app appends to it, so turns you add here can stay invisible there — both on screen and in the context it sends to the model next. |
| `sessionExternalRiskForkLead` | The conversation can quietly split in two. |
| `sessionExternalRiskForkBody` |  A transcript is a tree of turns, each pointing back to one earlier turn. If the other program continues from the turn it remembers while this app continues from the latest turn on disk, you end up with two branches in one file, and only one is treated as the live tip. |
| `sessionExternalRiskLostLead` | Work on the side branch can be lost on the next resume. |
| `sessionExternalRiskLostBody` |  When the session is resumed later, the model's context is rebuilt by walking back from the chosen tip, so anything on the branch that wasn't chosen — even finished work you already read — may simply be gone afterward, with no error. |
| `sessionExternalRiskCaveat` | These are the most likely outcomes, not a guarantee. The exact effects depend on what the other program is and how it manages the session, and there may be others — for instance, if both programs write at the same instant, the shared transcript file itself could be left inconsistent. The safe move is to drive a session from one place at a time: close the other program, or treat this view as read-only until the warning clears. |
| `pendingToolWarningWaiting` | Unfinished {tool} call in this session. |
| `pendingToolWarningStale` | Unfinished {tool} call, possibly abandoned. |
| `pendingToolWarningElapsed` | Last activity {duration} ago. |
| `pendingToolWarningExplainTitle` | Why check the other process? |
| `pendingToolRiskIntro` | This session's transcript ends on a tool call with no result, and no live process is detected driving it. Another program (a terminal or IDE) may still be running the call or be parked at a prompt — or it may have exited and left the call dangling. YA can't tell which. The likely effects of sending from here: |
| `pendingToolRiskUnblockLead` | It won't answer what's blocking. |
| `pendingToolRiskUnblockBody` |  If the other program is parked at a prompt, that prompt lives in its own UI, not as a message in this transcript, so a message from here does not resolve it. |
| `pendingToolRiskForkLead` | It can fork the conversation. |
| `pendingToolRiskForkBody` |  Sending appends onto a turn whose tool call is unfinished; when the other program resumes from the call it remembers, the histories split into two branches and a later resume keeps only one. |
| `pendingToolRiskDiscardLead` | If that program already exited, the call is discarded. |
| `pendingToolRiskDiscardBody` |  Resuming a transcript whose last step is an unanswered tool call forces the provider to drop or synthesize a result, losing whatever that run was doing. |
| `pendingToolRiskCaveat` | YA cannot tell a program parked at a prompt from one that has exited — both leave the same unfinished tool call on disk — so this is a hedge, not a certainty. The safe move is to check the other program first. |
| `sessionLoadingRenderingTranscript` | Rendering {count} messages... |
| `sessionProgressiveRenderingStatus` | Rendering transcript {percent}%... |
| `sessionProgressiveRenderingAriaLabel` | Transcript rendering progress |
| `sessionFollow` | Follow |
| `sessionFollowLatestOutput` | Follow latest session output |
| `sessionNewOutputBelow` | New output below |
| `sessionNewOutputBelowTitle` | Jump to latest session output |
| `sessionMenuOpenNewTab` | Open in new tab |
| `sessionMenuGenerateTitle` | Generate Title (uses tokens) |
| `sessionMenuPromptSuggestionsOn` | Suggestions: On |
| `sessionMenuPromptSuggestionsOff` | Suggestions: Off |
| `sessionMenuClear` | Clear (new session) |
| `messageInputCollapsedLineCount` | {count} lines |
| `forkSummaryComposerTitle` | Fork after selected turn |
| `forkSummaryComposerDescription` | Keep this request and the agent response to it; replace later turns with a generated summary. |
| `forkSummaryComposerPlaceholder` | Optional summary instructions; leave empty for the default summary... |
| `forkSummarySubmit` | Fork with summary |
| `forkSummaryTooltip` | Fork after the selected turn with a generated summary |
| `forkSummaryNoSummarySubmit` | Fork without summary |
| `forkSummaryNoSummaryTooltip` | Fork after the selected turn without generating a summary (Ctrl+Enter) |
| `forkBeforeTurnLabel` | Fork session from before this turn |
| `forkBeforeTurnTooltip` | Fork session from before this turn (re-reads context at standard price if the session has been idle past the cache window) |
| `userPromptCopyAction` | Copy message text |
| `userPromptEditAction` | Edit latest message |
| `userPromptCancelUnconfirmedAction` | Cancel sent steering message |
| `userPromptDeliverySent` | Sent — waiting for the session to record it |
| `userPromptDeliverySentLabel` | sent |
| `userPromptDeliverySentDetail` | This message reached the server but isn't recorded in the session yet. A message sent while the agent was busy is recorded when the agent picks it up. The faint style and this tag disappear once it's confirmed. |
| `userPromptShowStartingHere` | Show starting here |
| `forkSummaryCancel` | Cancel fork summary |
| `toolbarQueueShortLabel` | Queue |
| `toolbarSteerShortLabel` | Steer |
| `toolbarProjectQueueTooltipWithShortcut` | Send after all sessions in this project are idle<br>Ctrl+Enter |
| `toolbarConversationViewEnable` | Show Conversation view and condense routine activity |
| `toolbarConversationViewDisable` | Show the full activity transcript |
| `toolbarSteerNowLabel` | Steer now |
| `toolbarSteerNowShortLabel` | Now |
| `toolbarSteerNowTooltip` | Steer now interrupts in-flight generation without ending the turn. |
| `toolbarOverflowMenu` | More toolbar controls |
| `slashCommandsLabel` | Slash commands |
| `slashCommandsShow` | Show slash commands |
| `showThinkingTitle` | Show thinking |
| `showThinkingHint` | Show the model's thinking. For some providers this is only a summary. |
| `showThinkingDefault` | Default |
| `showThinkingDefaultShown` | shown |
| `showThinkingDefaultHidden` | hidden |
| `showThinkingOn` | On |
| `showThinkingOff` | Off |
| `toolbarProviderRuntimeRateLimited` | {provider} rate limited |
| `toolbarProviderRuntimeRetrying` | {provider} retrying |
| `toolbarProviderRuntimeStopped` | {provider} stopped |
| `toolbarProviderRuntimeStoppedReason` | {label}: {reason} |
| `toolbarProviderRuntimeRetryAt` | {label} - retry at {time} |
| `toolbarProviderRuntimeAria` | Provider runtime status: {summary} |
| `providerRuntimeRetryingTitle` | The provider will retry automatically. |
| `providerRuntimeTerminalTitle` | This turn ended and will not retry automatically. Send again or choose another model. |
| `providerRuntimeProcessTerminalTitle` | The provider process stopped and will not retry automatically. Send again to restart the session. |
| `providerRuntimeReasonRateLimit` | Rate limit |
| `providerRuntimeReasonOverloaded` | Overloaded |
| `providerRuntimeReasonServerError` | Server error |
| `providerRuntimeReasonNetwork` | Network |
| `providerRuntimeReasonUnknown` | Unknown |
| `providerRuntimeReasonTitle` | reason: {reason} |
| `providerRuntimeHttpStatusTitle` | HTTP status: {status} |
| `providerRuntimeLastSeenTitle` | last seen: {time} |
| `providerRuntimeOccurredTitle` | occurred: {time} |
| `providerRuntimeSourceTitle` | source: {source} |
| `toolbarPositionAge` | at {age} |
| `toolbarPositionAgeAria` | Transcript position age |
| `sessionSearchHelpNavigate` | {shortcutKeys} prev · ↑↓ matches · click jumps |
| `sessionSearchHelpClose` | Enter jump+close · Esc cancel · Aa case |
| `toolbarShortcutQueueCurrentTurn` | Queue message |
| `toolbarShortcutProjectQueue` | Queue for Project Queue |
| `toolbarShortcutForkAfterSummary` | Fork after initial turn with summary |
| `toolbarShortcutRightClickLongPress` | Right-click / long-press ? |
| `toolbarShortcutChangeKeys` | Change keys |
| `toolbarShortcutSwapEnterCtrlEnter` | Swap Enter and Ctrl+Enter |
| `toolbarShortcutToggleThinkingTranscript` | Show / hide Thinking rows |
| `conversationActivitySingular` | activity |
| `conversationActivityPlural` | activities |
| `conversationActivityActive` | Working {duration} · {count} {activity} |
| `conversationActivityActiveWithoutTime` | Working · {count} {activity} |
| `conversationActivityComplete` | {duration} elapsed · {count} {activity} hidden |
| `conversationActivityCompleteWithoutTime` | {count} {activity} hidden |
| `conversationActivityExpandTitle` | Show hidden activity in its original positions |
| `conversationActivityCollapseTitle` | Collapse this turn's routine activity |
| `processInfoSectionProviderRuntime` | Provider Runtime |
| `processInfoLabelLiveness` | Liveness |
| `processInfoLabelProviderRetention` | Provider retention |
| `processInfoLabelLastWake` | Last wake |
| `processInfoLabelWakeMessage` | Wake message |
| `processInfoLabelRuntimeStatus` | Status |
| `processInfoLabelRuntimeReason` | Reason |
| `processInfoLabelRuntimeHttpStatus` | HTTP status |
| `processInfoLabelRuntimeRetryAt` | Retry at |
| `processInfoLabelRuntimeRetryDelay` | Retry delay |
| `processInfoLabelRuntimeStarted` | Started |
| `processInfoLabelRuntimeLastSeen` | Last seen |
| `processInfoLabelRuntimeOccurred` | Occurred |
| `processInfoLabelRuntimeMessage` | Message |
| `processInfoLabelRuntimeDetails` | Details |
| `processInfoLabelRuntimeAttempt` | Attempt |
| `processInfoLabelRuntimeMaxRetries` | Max retries |
| `processInfoLabelRuntimeEventCount` | Events |
| `processInfoLabelRuntimeSource` | Source |
| `processInfoRuntimeRetrying` | Retrying provider request |
| `processInfoRuntimeTerminal` | Turn ended; no automatic retry |
| `processInfoRuntimeProcessTerminal` | Provider process stopped; no automatic retry |
| `processInfoRuntimeUnbounded` | Unbounded |
| `gitStatusCheckRemoteShort` | Check |
| `gitStatusLoadUntrackedFolderFailed` | Failed to load untracked folder |
| `gitStatusUntrackedFolderCount` | {count} files |
| `gitStatusUntrackedFolderCountTruncated` | Showing first {count} files |
| `gitStatusUntrackedFolderEmpty` | No untracked files found |
| `diffViewModeAuto` | Auto |
| `diffViewModeUnified` | Unified |
| `diffViewModeSideBySide` | Side-by-side |
| `diffViewModeTitle` | Diff layout: auto, unified, or side-by-side |
| `cancel` | Cancel |
| `loading` | Loading… |
| `toolResultMediaAlt` | {filename} tool result |
| `toolResultMediaCollapse` | Collapse image preview |
| `toolResultMediaExpand` | Expand image preview |
| `toolResultMediaImage` | image |
| `toolResultMediaInvalidImageData` | The tool returned invalid image data. |
| `toolResultMediaLoadFailed` | Image unavailable |
| `toolResultMediaLoading` | Loading image… |
| `toolResultMediaOpen` | Open {filename} |
| `toolResultMediaSourceUnavailable` | The source image is no longer available. |
| `toolResultMediaStorageUnavailable` | The image could not be stored safely. |
| `toolResultMediaTooLarge` | The image is too large to store. |
| `toolResultMediaUnavailable` | image unavailable |
| `toolResultMediaUnnamed` | tool result image {number} |
| `toolResultMediaUnsupportedMedia` | The returned image format is unsupported. |
| `sourceReviewAddToReview` | Add to review |
| `sourceReviewOpenDirtyFile` | Review |
| `sourceReviewSubmitToDefault` | Submit to current session |
| `sourceReviewSubmitToNew` | Submit to new session |
| `sourceReviewCommentPlaceholder` | Comment on this line… |
| `sourceReviewSubmitQueued` | Queued — the server is busy; the comment is still pending. |
| `sourceReviewReview` | Review ({count}) |
| `sourceReviewStart` | Review |
| `sourceReviewSubmitTitle` | Submit review |
| `sourceReviewNoPending` | No pending comments. |
| `sourceReviewStale` | context gone |
| `sourceReviewMoved` | moved |
| `sourceReviewTargetLegend` | Send to |
| `sourceReviewTargetRecent` | Recent review session |
| `sourceReviewTargetNew` | New review session |
| `sourceReviewTargetOther` | Another session |
| `sourceReviewRecentSuffix` | recent review |
| `sourceReviewSessionsUnavailable` | Existing sessions unavailable |
| `sourceReviewProvider` | Provider |
| `sourceReviewModel` | Model |
| `sourceReviewModelDefault` | Provider default |
| `sourceReviewSubmitReview` | Submit {count} |
| `sourceReviewCommentsHint` | Click a line in a diff or in a file's blame to draft a comment. |
| `sourceReviewDelete` | Delete |
| `sourceReviewDeleteConfirm` | Confirm delete |
| `sourceReviewOpenInFiles` | Open this file's blame |
| `sourceReviewOpenSubmit` | Submit review… |
| `sourceTabChanges` | Changes |
| `sourceTabCommits` | Commits |
| `sourceTabFiles` | Files |
| `sourceTabComments` | Comments |
| `sourceCopyBranch` | Copy branch name |
| `sourceCopyCommitHash` | Copy commit hash |
| `sourceCopyCommitSubject` | Copy commit subject |
| `sourceCopyRevisionLabel` | Copy revision label |
| `sourceCopyPath` | Copy path |
| `sourceOpenFile` | Open file |
| `sourceCopyLine` | Copy line |
| `sourceCopyPathLine` | Copy path and line number |
| `sourceCommentOnLine` | Comment on this line |
| `sourceDiffLineActions` | Diff line. Press Enter to comment or Shift+F10 for actions. |
| `sourceMoreActions` | More actions |
| `sourceActionMenu` | Source actions |
| `sourceDismissActions` | Dismiss actions |
| `sourceResizeRevisionPane` | Resize revision pane |
| `sourceResizeFilePane` | Resize file pane |
| `sourceShortcutHelp` | Keyboard shortcuts |
| `sourceShortcutSearch` | Search commits |
| `sourceShortcutNavigate` | Navigate rows |
| `sourceShortcutOpen` | Open selection |
| `sourceShortcutBack` | Back or clear |
| `sourceShortcutHunks` | Previous or next hunk |
| `sourceShortcutActions` | Open actions |
| `sourceLoadMore` | Load more |
| `sourceNoCommits` | No commits. |
| `sourceWorkingTree` | Working tree |
| `sourceWorkingTreeDescription` | Current uncommitted changes against HEAD |
| `sourceOpenChanges` | Show working tree changes |
| `sourceBackToCommits` | Back to commits |
| `sourceUncommitted` | Uncommitted |
| `sourceChangedFileCount` | {count} changed file(s) |
| `sourceWorktreeStaged` | staged |
| `sourceWorktreeUnstaged` | unstaged |
| `sourceWorktreeBoth` | staged + unstaged |
| `sourceWorktreeUntracked` | untracked |
| `sourceWorktreePartial` | partial |
| `sourceWorktreePartialDescription` | Partially staged: staged changes plus additional unstaged changes. |
| `sourceFileStatusModified` | Modified |
| `sourceFileStatusAdded` | Added |
| `sourceFileStatusDeleted` | Deleted |
| `sourceFileStatusRenamed` | Renamed |
| `sourceFileStatusCopied` | Copied |
| `sourceFileStatusTypeChanged` | Type changed |
| `sourceFileStatusUnmerged` | Unmerged |
| `sourceFileStatusUntracked` | Untracked |
| `sourceFileStatusChanged` | Changed |
| `sourceFilterFiles` | Filter files… |
| `sourceNoFiles` | No files. |
| `sourceFilesTruncated` | Showing {shown} of {total} |
| `sourceBlameNotCommitted` | Not committed yet |
| `sourceBlameTruncated` | File too large to blame in full. |
| `sourceSearchCommits` | Search commit changes… |
| `sourceSearching` | Searching… |
| `sourcePreparingCommitIndex` | Preparing commit history… |
| `sourceIndexingCommits` | Indexing commit history… {indexed} of {total} |
| `sourceNoMatches` | No matches. |
| `sourceMarkReadToHere` | Mark read to here |
| `sourceMarkUnreadSinceHere` | Mark unread since here |
| `sourceCommentCount` | {count} pending review comment(s) |
| `sourceShowFullMessage` | Show the full original commit message |
| `sourceCommitMessage` | commit message |
| `sourceNewerCommit` | ↑ Newer |
| `sourceOlderCommit` | Older ↓ |
| `sourceBlameAtHead` | Blame this file as of HEAD |
| `sourceBlameAtHeadShort` | blame |
| `sourceCompareToHead` | To HEAD |
| `sourceCompareToHeadDescription` | Show the direct diff from this revision to current HEAD |
| `sourceNoChangesToHead` | This revision and HEAD have no content differences. |
| `sourceProjectionUpgradeNotice` | Update or restart the yepanywhere server to use Ignore whitespace and To HEAD. Ordinary Source Control still works. |
| `sourceDismissProjectionNotice` | Dismiss server update notice |
| `sourceHunkPosition` | {current} of {total} |
| `sourcePreviousHunkShortcut` | Previous hunk (P) |
| `sourceNextHunkShortcut` | Next hunk (N) |
| `gitStatusRecentCommits` | Recent commits |
| `gitStatusNoRecentCommits` | No commits yet |
| `gitStatusUntitledCommit` | (no subject) |
| `gitStatusDiffPreview` | Diff preview |
| `gitStatusSelectFileForDiff` | Select a file to preview changes |
| `gitStatusIgnoreWhitespace` | Ignore whitespace |
| `gitStatusWhitespaceChangesHidden` | Whitespace-only changes are hidden. |
| `gitStatusNoContentChanges` | No content changes. |
| `gitStatusDiffPreviewSkipped` | Preview skipped |
| `gitStatusDiffPreviewSkippedContentTooLarge` | The selected file is too large to preview safely. |
| `gitStatusDiffPreviewSkippedLineTooLong` | The selected file has a line that is too long to preview safely. |
| `gitStatusDiffPreviewSkippedHtmlTooLarge` | The highlighted diff is too large to render safely. |
| `gitStatusDiffPreviewSkippedPath` | File |
| `gitStatusDiffPreviewSkippedSize` | Size |
| `gitStatusDiffPreviewSkippedLineLength` | Longest line |
| `gitStatusDiffPreviewSkippedHtmlSize` | HTML size |
| `gitStatusUpgradeRequiredTitle` | Source Control needs a server update |
| `gitStatusUpgradeRequiredDescription` | This browser has a newer Source Control page, but this yepanywhere server does not advertise support for it. Upgrade the yepanywhere server, then reload this page. |
| `gitStatusCompatibilityTitle` | Basic Source Control |
| `gitStatusCompatibilityDescription` | This server supports repository status and the available actions above. Update the yepanywhere server to add commit history, file browsing, and source review. |
| `gitStatusLastCheckedRemote` | Last checked remote: {time} |
| `gitStatusRemoteUnknown` | unknown |
| `gitStatusRemoteJustNow` | just now |
| `gitStatusRemoteMinutesAgo` | {count}m ago |
| `gitStatusRemoteHoursAgo` | {count}h ago |
| `gitStatusCheckRemote` | Check remote |
| `gitStatusCheckingRemote` | Checking... |
| `gitStatusRemoteCheckSuccess` | Remote checked |
| `gitStatusRemoteCheckBusy` | Another git action is already running |
| `gitStatusRemoteCheckFailed` | Remote check failed |
| `gitStatusRemoteCheckNotRepo` | Not a git repository |
| `gitStatusPull` | Pull |
| `gitStatusPulling` | Pulling... |
| `gitStatusPullSuccess` | Pull complete |
| `gitStatusPullBusy` | Another git action is already running |
| `gitStatusPullDiverged` | Pull needs attention: branch diverged. Local commits: {ahead}. Remote commits: {behind}. A fast-forward pull cannot apply. Use a terminal or ask an agent to rebase or merge. |
| `gitStatusPullFailed` | Pull needs attention |
| `gitStatusPullNotRepo` | Not a git repository |
| `gitStatusPush` | Push |
| `gitStatusPushing` | Pushing... |
| `gitStatusPushSuccess` | Pushed commits |
| `gitStatusPushPublished` | Branch published |
| `gitStatusPushAlreadyUpToDate` | Already up to date |
| `gitStatusPushBusy` | Another git action is already running |
| `gitStatusPushFailed` | Push needs attention |
| `gitStatusPushNoUpstream` | Push needs attention |
| `gitStatusPushDiverged` | Push needs attention: branch diverged. Local commits: {ahead}. Remote commits: {behind}. Use a terminal or ask an agent to rebase or merge before pushing. |
| `gitStatusPushRejected` | Push rejected; remote has newer commits |
| `gitStatusPushNotRepo` | Not a git repository |
| `gitStatusAutoOptionsChecking` | Checking automatic options... |
| `gitStatusAutoOptionsFailed` | Automatic rebase/merge check failed. |
| `gitStatusAutoOptionsLabel` | Try automatically: |
| `gitStatusAutoRebase` | Rebase |
| `gitStatusAutoMerge` | Merge |
| `gitStatusAutoActionNotEnabled` | Automatic rebase/merge actions are not enabled yet. |
| `gitStatusAutoHelpLabel` | About automatic rebase and merge |
| `gitStatusAutoHelp` | Automatic rebase or merge requires a clean worktree and should abort if Git cannot apply cleanly. It does not run tests. |
| `gitStatusAutoOptionsUnavailable` | Automatic rebase/merge unavailable: {reason}. |
| `gitStatusAutoReasonOperationRunning` | another git action is already running |
| `gitStatusAutoReasonSequencer` | an unfinished merge, rebase, or cherry-pick exists |
| `gitStatusAutoReasonDirty` | worktree has uncommitted changes |
| `gitStatusAutoReasonMissingUpstream` | branch has no upstream |
| `gitStatusAutoReasonDetached` | HEAD is detached |
| `gitStatusAutoReasonNotDiverged` | branch is not diverged |
| `gitStatusAutoReasonNotRepo` | not a git repository |
| `gitStatusAutoReasonStatusUnavailable` | status could not be checked |
| `effortChangeApplyFailed` | Failed to apply the selected effort. Queued work remains paused; choose an effort again to retry. |
| `modelSwitchActivate` | Activate |
| `modelSwitchActivating` | Activating… |
| `modelSwitchActivateFailed` | Failed to activate session |
| `modelSwitchNextSend` | Next message |
| `sessionRestartModeTitle` | Restart mode |
| `sessionRestartModeHandoff` | Handoff |
| `sessionRestartModeHandoffDescription` | New session seeded with a transcript summary |
| `sessionRestartModeFork` | Fork |
| `sessionRestartModeForkDescription` | Copy the conversation into a new session (same provider, context preserved) |
| `sessionRestartStartFork` | Start fork |
| `sessionRestartForking` | Starting fork... |
| `sessionRestartForkKeepsProvider` | Fork keeps the conversation on {provider} |
| `forkFromTurnStarted` | Forked session created |
| `forkFromTurnNoAnchor` | No earlier loaded turn to fork from |
| `forkAfterTurnPending` | Wait for the agent response to finish before forking after this turn. |
| `forkAfterTurnNoAnchor` | No completed turn boundary is loaded for this fork. |
| `forkSummaryStarted` | Forking in the background… |
| `forkSummaryFailed` | Failed to fork with summary |
| `forkSummaryAttachmentsUnsupported` | Fork summary instructions cannot include attachments. |
| `forkSummaryProgress` | Forking… |
| `forkSummaryCancelInFlight` | Cancel |
| `forkSummaryReadyOpen` | Forked — open the new session |
| `forkSummaryOpenedNewTab` | Forked, opened in a new tab |
| `forkSummaryReadyFallbackTitle` | forked session |
| `forkSummaryDismiss` | Dismiss |
| `forkSummaryAutoOpenToggle` | Open in new tab when ready |
| `forkSummaryReadyPrefix` | Forked: |
| `forkSummaryOpenedMarker` | (tab opened) |
| `forkSummaryClicked` | (clicked) |
| `bangBlockAriaLabel` | Local command run |
| `bangOutputAriaLabel` | Command output |
| `bangRunning` | running… |
| `bangExitCode` | exit {code} |
| `bangCancel` | Cancel |
| `bangRaw` | Raw |
| `bangRendered` | Rendered |
| `bangStderrLabel` | stderr |
| `bangTruncatedNote` | Output truncated; stored output is capped. |
| `bangRecall` | Recall |
| `bangRecallTitle` | Draft this command in the composer (Ctrl+↑ cycles history) |
| `bangRerun` | Re-run |
| `bangEcho` | Echo to session |
| `bangEchoTitle` | Send command and output to the agent as a user turn |
| `bangDelete` | Delete |
| `bangLoadOutput` | Load output |
| `bangLoadingOutput` | Loading output… |
| `bangHideOutput` | Hide output |
| `bangRetryOutput` | Retry output |
| `bangComposerChip` | !! local command — runs in the project directory, not sent to the agent |
| `bangComposerEscapedChip` | leading space: sends as ordinary message text |
| `bangEmptyCommand` | Add a command after !! |
| `bangTabCompleteLabel` | Tab-complete command |
| `bangRunFailed` | Failed to start local command |
| `bangEchoFailed` | Failed to load command output for echo |
| `bangHistoryTitle` | !! Command History |
| `bangHistoryEmpty` | No local commands have been run yet. |
| `bangHistoryOpenSession` | Open session |
| `bangHistoryActionEdit` | Edit / re-issue command |
| `bangHistoryActionNew` | New command in session |
| `bangHistoryActionJump` | Jump to command in session |
| `composerRecallMenuLabel` | Recall a previous message |
| `composerRecallOpenButton` | Recall a previous message |
| `composerRecallGoToTurn` | Go to this turn |
| `sidebarBangCommands` | !! Commands |
| `turnNotchJump` | Jump |
| `turnNotchForkBefore` | Fork before… |
| `turnNotchForkAfter` | Fork after… |
| `turnNotchCopy` | Copy |
| `turnNotchShowFrom` | Show from |
| `turnNotchDismissMenu` | Dismiss menu |
| `turnNotchJumpToTurn` | Jump to turn |
| `turnNotchShowFromTurn` | Load client transcript from turn |
| `modelSettingsForkSummaryAutoOpenTitle` | Forked sessions |
| `modelSettingsForkSummaryAutoOpenDescription` | When a fork-after-summary finishes, the forked session can open automatically in a new tab. When off, a link appears instead. (In a session, right-click the turn dashes beside the right scrollbar to fork before or after a turn.) |
| `modelSettingsForkSummaryAutoOpenLabel` | Open forked session in a new tab when ready |
| `reloadBannerCodeChangedCompact` | {target} changed |
| `reloadBannerTargetServer` | Server |
| `reloadBannerTargetFrontend` | Frontend |
| `reloadBannerReloadTarget` | Reload {target} |
| `reloadBannerReloadTargetCompact` | Reload |
| `reloadBannerReloadNow` | Reload Now |
| `reloadBannerReloadAnyway` | Reload Anyway |
| `reloadBannerDismiss` | Dismiss |
| `reloadBannerRestartWhenSafe` | Reload When Safe |
| `reloadBannerRestartWhenSafeCompact` | Safe |
| `reloadBannerCancelSafeRestart` | Cancel Restart |
| `reloadBannerCancelSafeRestartCompact` | Cancel |
| `reloadBannerStatusActiveAndQueuedCompact` | {activeCount} active, {queuedCount} queued |
| `reloadBannerStatusActiveCompact` | {count} active |
| `reloadBannerStatusQueuedCompact` | {count} queued |
| `reloadBannerSafeRestartReadyCompact` | Ready |
| `reloadBannerSafeRestartRestartingCompact` | Restarting |
| `reloadBannerSafeRestartWaitingActiveAndQueued` | Restart scheduled - waiting for {activeCount} active session{activeSuffix} and {queuedCount} queued message{queuedSuffix} |
| `reloadBannerSafeRestartWaitingActive` | Restart scheduled - waiting for {count} active session{suffix} |
| `reloadBannerSafeRestartWaitingQueued` | Restart scheduled - waiting for {count} queued message{suffix} |
| `reloadBannerSafeRestartReady` | Restart scheduled - restarting now |
| `reloadBannerSafeRestartRestarting` | Restarting when safe... |
| `reloadBannerSafeRestartPreservedRecoveredQueue` | {count} recovered patient queued message{suffix} preserved for manual resume. |
| `bulkSelectAllFilteredTitle` | Select all {count} filtered sessions |
| `bulkSelectAllFiltered` | Select all {count} |
| `relayLoginRelayHostPreview` | relay: {host} |
| `relayLoginErrorServerOfflineWithRelay` | Server is not connected to {relayUrl}. Make sure your server is running and using that relay. |
| `notificationsProjectInactiveTitle` | Project Inactive |
| `notificationsProjectInactiveDescription` | Notify when a project has no active sessions, queued work, or background tasks. |
| `notificationsYaInactiveTitle` | YA Inactive |
| `notificationsYaInactiveDescription` | Notify when all projects are inactive and no YA-managed work remains. |
| `notificationsTestPushTitle` | Test Push Delivery |
| `notificationsTestPushDescription` | These settings apply to the mobile bulk send and every device Test button below. |
| `notificationsSendToMobileDevices` | Send to mobile ({count}) |
| `notificationsNoMobilePushDevices` | No subscribed mobile push devices |
| `notificationsTest` | Test |
| `notificationsTestDevice` | Send a test push to this device |
| `notificationsTestSentToDevice` | Sent test push to {device}. |
| `notificationsTestSentToMobile` | Sent test push to {count} mobile device(s). |
| `notificationsTestPartialFailure` | Failed to send to {failed} of {total} device(s). |
| `notificationsTestFailed` | Failed to send test push. |
| `pushToggleDisplayBehavior` | Display behavior |
| `pushTestDeliveryPriority` | Web Push priority |
| `pushDeliveryHigh` | High priority |
| `pushDeliveryNormal` | Normal priority |
| `pushDeliveryLow` | Low priority |
| `pushDeliveryVeryLow` | Very low priority |
| `pushTestMessage` | Test push ({priority}) from Yep Anywhere |
| `hostIdentityTitle` | Host Marker |
| `hostIdentityDescription` | Choose an emoji that identifies this host in connected headers and browser tabs. |
| `hostIdentityPresetsAria` | Host marker presets |
| `hostIdentityUsePreset` | Use {icon} as the host marker |
| `hostIdentityCustomLabel` | Custom host marker |
| `hostIdentityCustomPlaceholder` | Paste one emoji |
| `hostIdentitySave` | Save |
| `hostIdentityClear` | Clear |
| `hostIdentityInvalid` | Enter exactly one emoji or character. |
| `hostIdentityMarkerAria` | Current host marker: {icon} |
| `hostAwakeTitle` | Keep host awake while the server is running |
| `hostAwakeDescription` | Prevent automatic system sleep while this server is running, including on battery above the configured reserve. The display may still turn off, and closing a laptop lid follows the normal system policy. |
| `hostAwakeStatusLoading` | Checking host availability support... |
| `hostAwakeStatusActive` | Active — preventing automatic sleep. |
| `hostAwakeStatusPaused` | Paused — battery is at or below {percent}%; automatic sleep is allowed. |
| `hostAwakeStatusUnavailable` | Unavailable on this server. |
| `hostAwakeStatusDisabled` | Inactive — normal automatic sleep settings apply. |
| `hostAwakeStatusError` | Could not enable: {reason} |
| `hostAwakeStatusUnknownError` | unknown host error |
| `hostAwakeStatusFetchError` | Could not load the host-awake status. |
| `hostAwakeBatteryObserved` | Last observed battery: {percent}% at {time}. |
| `hostAwakeBatteryObservedUnknownTime` | an unknown time |
| `hostAwakeRefresh` | Refresh status |
| `hostAwakeBatteryFloorTitle` | Allow automatic sleep at |
| `hostAwakeBatteryFloorDescription` | When this host is running on battery at or below this level, stop preventing automatic sleep to preserve the remaining charge. |
| `hostAwakeBatteryFloorInput` | Battery reserve percentage |
| `hostAwakeBatteryFloorSave` | Save |
| `hostAwakeBatteryFloorInvalid` | Enter a whole percentage from 1 through 100. |
| `providersClaudeLoginCommandPreviewAria` | Claude login command preview |
| `providersClaudeGatewayTitle` | Claude gateway |
| `providersClaudeGatewayDescription` | Add an Anthropic-compatible endpoint as a separate Claude provider. Empty leaves it off. |
| `providersClaudeGatewayConfigured` | Configured |
| `providersClaudeGatewayUrlAria` | Claude gateway endpoint URL |
| `providersClaudeGatewayStartCommandLabel` | Start command |
| `providersClaudeGatewayStartCommandAria` | Claude gateway start command |
| `providersClaudeGatewayStartCommandPlaceholder` | cd /path/to/gateway && HOST=localhost gateway start |
| `providersClaudeGatewayStartCommandHint` | Optional. Runs through Bash on the YA server host only when the configured endpoint is loopback and its TCP port has no listener. Keep the gateway in the foreground so YA can stop it on shutdown. |
| `providersClaudeGatewayIsolationHint` | Applied only to YA sessions launched through Claude Gateway. Regular Claude sessions and manual Claude TUIs keep their current routing. |
| `providersClaudeOllamaDeprecationNotice` | Use Claude Gateway instead. ClaudeOllama will be removed in a future release. |
| `providersClaudeOllamaDeprecationDismissAria` | Dismiss ClaudeOllama deprecation notice |
| `providersAdditionalModelsTitle` | Additional models |
| `providersAdditionalModelsDescription` | Opt previous or custom model IDs into Claude model pickers. Nothing is enabled by default. |
| `providersAdditionalModelsNone` | None selected |
| `providersAdditionalModelsOne` | 1 enabled |
| `providersAdditionalModelsMany` | {count} enabled |
| `providersAdditionalModelsEditorDescription` | Enabled entries appear separately from the primary model list. Account access is checked only when you use a model. |
| `providersAdditionalModelsUnlistedDescription` | Previously enabled; no longer maintained by this server |
| `providersAdditionalModelsCustomDescription` | Custom model ID |
| `providersAdditionalModelsCustomTitle` | Custom model ID |
| `providersAdditionalModelsCustomHint` | Add an exact provider model ID. Saving it does not guarantee that your account can use it. |
| `providersAdditionalModelsCustomPlaceholder` | claude-model-version |
| `providersAdditionalModelsCustomInputAria` | Custom Claude model ID |
| `providersAdditionalModelsAdd` | Add |
| `providersAdditionalModelsInvalidId` | Enter an exact model ID without spaces. |
| `providersAdditionalModelsDuplicateId` | That model is already enabled. |
| `providersAdditionalModelsSaveError` | Failed to save additional models |
| `previousModelsGroup` | Previous models |
| `modelSelectionUnavailable` | Saved or current selection; not currently enabled |
| `providersCodexUpdateManualInstallHint` | This Codex install was not installed with npm, so YA cannot update it automatically. Update it with Codex Desktop or your package manager, then restart Yep Anywhere. |
| `codexUpdateWillRunCommand` | Yep Anywhere will run: |
| `codexUpdateManualInstallHint` | This Codex install was not installed with npm, so Yep Anywhere cannot update it automatically. Update it with Codex Desktop or your package manager, then restart Yep Anywhere. |
| `codexUpdateAutoFutureVersions` | Update next versions too |
| `codexUpdateDone` | Done |
| `speechSettingsBackendValidating` | Validating backend availability... |
| `speechSettingsBackendUnavailable` | Backend unavailable. |
| `speechSettingsStreamingRelayUnavailable` | Streaming speech controls are unavailable over relay; this browser uses batch transcription here. |
| `speechSettingsXaiKeyTitle` | Browser xAI STT Key |
| `speechSettingsXaiKeyDescription` | Optional. Stored in this browser only and not sent to YA. Direct Grok STT uses it first; if empty, it asks this YA server for a short-lived secret or borrowed key only when transcription starts. |
| `speechSettingsXaiKeyPlaceholder` | Borrow from server when empty |
| `speechSettingsParakeetModelTitle` | Parakeet Model |
| `speechSettingsParakeetModelDescription` | Model id sent with YA Parakeet or NeMo transcription requests from this browser. |
| `speechSettingsParakeetModelPresetLabel` | Parakeet model preset |
| `speechSettingsParakeetModelInputLabel` | Parakeet model id |
| `speechSettingsParakeetCustomModel` | Custom model id |
| `speechSettingsParakeetModelPlaceholder` | nvidia/parakeet-tdt-0.6b-v3 |
| `speechSettingsParakeetModelHint` | Use a model supported by the selected Parakeet backend. The unified streaming Parakeet model needs a separate modern-NeMo runtime. |
| `speechSettingsParakeetModelRequiresBackend` | requires {backend} |
| `speechSettingsKeepMicWarmTitle` | Keep Mic Warm |
| `speechSettingsKeepMicWarmDescription` | Keep this browser's microphone stream ready while this tab is visible between server-routed dictations so repeated starts skip the browser's device cold-open. The browser may show the mic indicator while the idle stream is held; no audio is sent between dictations. |
| `speechSmartTurnThresholdHint` | 1 requires perfect confidence. |
| `developmentRelayDebugTitle` | Relay Debug Logging |
| `developmentRelayDebugDescription` | Log relay requests and responses to the browser console. Useful for debugging connection timeouts. |
| `developmentWorkstreamsTitle` | Workstreams |
| `developmentWorkstreamsDescription` | Enable experimental workstream surfaces and APIs: per-lane Project Queue targets, each lane a separate real checkout of the project. |
| `developmentSessionScrollMemoryTitle` | Session Scroll Memory |
| `developmentSessionScrollMemoryControlTitle` | Restore mode |
| `developmentSessionScrollMemoryDescription` | Browser-local debug setting for how reopened session transcripts restore scroll position. Include the selected mode in scroll bug reports. |
| `developmentSessionScrollMemoryModeLiveTail` | Live tail (default) |
| `developmentSessionScrollMemoryModeLiveTailDescription` | Bottom snapshots reopen at the newest output and keep following. Scrolled-back snapshots restore their remembered row. |
| `developmentSessionScrollMemoryModeRememberPlace` | Remember place |
| `developmentSessionScrollMemoryModeRememberPlaceDescription` | Reopen at the last viewed row when available, even if newer output arrived below it. |
| `developmentSessionScrollMemoryModeManualFollow` | Manual follow |
| `developmentSessionScrollMemoryModeManualFollowDescription` | Currently restores like Remember place; reserved for stricter manual-follow experiments. |
| `developmentSessionScrollMemoryModeNoMemory` | No memory |
| `developmentSessionScrollMemoryModeNoMemoryDescription` | Do not retain per-session scroll snapshots; reopening uses the normal initial position. |
| `developmentInterruptedWarningActiveAndQueued` | {activeCount} active session{activeSuffix} and {queuedCount} queued message{queuedSuffix} will be interrupted |
| `developmentInterruptedWarningQueued` | {count} queued message{suffix} will be interrupted |
| `agentContextSuggestedHintsTitle` | Suggested context hints |
| `agentContextSuggestedHintsDescription` | Optional agent-facing context composed with, but separate from, global instructions. |
| `agentContextSuggestedLatexTitle` | Tell agents this client renders LaTeX math |
| `agentContextSuggestedLatexDescription` | Adds a client-capability hint to use inline and display LaTeX notation when it improves clarity. |
| `agentContextPreviewSummary` | Preview effective context |
| `agentContextPreviewEmpty` | No agent context will be sent. |
| `settingsUndoChanges` | Undo |
| `settingsUndoChangesTooltip` | Undo changes made on this settings page |
| `settingsSearchPlaceholder` | Search settings |
| `settingsSearchClear` | Clear search |
| `settingsSearchMatchValues` | Match values |
| `settingsSearchMatchValuesTooltip` | Also match each setting's current value |
| `settingsSearchNoResults` | No settings match "{query}" |
| `settingsSearchJumpTo` | Go to {location} |
| `settingsSearchCategoriesHeading` | Categories |
| `settingsSearchResultCount` | {count} matching settings |
| `settingsBackupTitle` | Browser settings |
| `settingsBackupSave` | Save |
| `settingsBackupLoad` | Load |
| `settingsBackupSaving` | Saving... |
| `settingsBackupLoading` | Loading... |
| `settingsBackupChecking` | Checking for a server copy... |
| `settingsBackupEmpty` | No server copy saved |
| `settingsBackupSavedAt` | Saved {time} |
| `settingsBackupSaveTooltip` | Save this browser's portable settings to the server |
| `settingsBackupLoadTooltip` | Load the server copy into this browser |
| `settingsBackupLoadConfirm` | Replace this browser's portable settings with the server copy? The page will reload. |
| `settingsBackupUnavailable` | Server copy is unavailable |
| `settingsBackupSaveFailed` | Failed to save browser settings |
| `settingsBackupLoadFailed` | Failed to load browser settings |
| `messageDeliveryTitle` | Message Delivery |
| `messageDeliveryLoading` | Loading... |
| `messageDeliveryDescription` | How queued-while-busy messages are delivered to the agent. Defaults match first-party provider UIs: each queued message is sent exactly as typed, one per completed turn. |
| `messageDeliveryJoinWindowTitle` | Batch Window (Seconds) |
| `messageDeliveryJoinWindowDescription` | Queued messages composed within this many seconds of the previous one are joined into a single turn. 0 = never batch consecutive queued turns. |
| `messageDeliveryJoinWindowOffHint` | 0 = never batch |
| `messageDeliveryJoinWindowOnHint` | Batch sends within {seconds}s of the previous send |
| `messageDeliveryProjectQueueQuietTitle` | Project Queue Quiet Window (Seconds) |
| `messageDeliveryProjectQueueQuietDescription` | How long the whole project must stay quiet before one Project Queue item starts. Session queues and active work still block it absolutely. |
| `messageDeliveryProjectQueueQuietOffHint` | 0 = start as soon as the project is idle |
| `messageDeliveryProjectQueueQuietOnHint` | Wait for {seconds}s of project quiet |
| `messageDeliveryComposeAnchorsTitle` | Compose-Time Anchors |
| `messageDeliveryComposeAnchorsDescription` | Prefix delivered queued messages with how long ago they were written, e.g. (93s ago). |
| `messageDeliveryBangCommandsTitle` | Show !! Commands history |
| `messageDeliveryBangCommandsDescription` | Show the cross-session !! command history view and its sidebar entry. Typing !! in a composer always runs the rest of the draft as a local shell command in the session project directory, outside the provider conversation. |
| `messageDeliverySteerNowDefaultTitle` | Start with "now" steering on |
| `messageDeliverySteerNowDefaultDescription` | Initial state of the per-turn "now" toggle, for providers with a "now" lane (currently Claude). The toggle itself stays per-turn. |
| `messageDeliveryPatientQueueDefaultTitle` | Deliver queued messages only when the agent is fully done (Claude only) |
| `messageDeliveryPatientQueueDefaultDescription` | Claude sessions only — no effect on other providers. When a session is busy and you queue a message, YA delivers it as soon as the agent finishes its current response. Turn this on to wait until the agent has completely finished — including any follow-up or background tasks it started on its own — before delivering. Best for long autonomous Claude runs where your next instruction should land at a real stopping point, not the first pause. (Other providers don't report background work, so there's nothing extra to wait for.) |
| `messageDeliveryProjectQueueShortcutTitle` | Use Ctrl+Enter for Project Queue |
| `messageDeliveryProjectQueueShortcutDescription` | When the Project Queue button is visible, Ctrl+Enter uses it instead of the per-session queue shortcut. |
| `appearanceToolbarSteerNowTitle` | "Now" steering selector |
| `appearanceToolbarSteerNowDescription` | Per-turn switch that delivers a steer immediately instead of after the current step. |
| `appearanceToolbarComposerRecallTitle` | Message recall button |
| `appearanceToolbarComposerRecallDescription` | Experimental. On-screen-keyboard button that lists earlier messages in this session starting with what you have typed, so you can resend or edit one. Ctrl+Up opens the same list whether or not the button is shown. |
| `modelSettingsCompactThresholdTitle` | Compact context early |
| `modelSettingsCompactThresholdDescription` | Start a compaction once this model's live context passes the chosen share of its window, instead of waiting for the agent's automatic compaction. Set per model; drag to the left edge to turn off. |
| `modelSettingsCompactThresholdOnHint` | Compact at {percent}% (~{tokens} tokens) |
| `modelSettingsCompactThresholdOffHint` | Off — uses the agent's automatic compaction |
| `compactThresholdQuickTitle` | Compact context early |
| `compactThresholdQuickOn` | At {percent}% (~{tokens} tokens) |
| `compactThresholdQuickOff` | Off — agent auto-compacts |
| `fileAccessTitle` | File access |
| `fileAccessDescription` | Which local folders the file viewer may read over HTTP. This limits the web viewer, not what the agent can do. |
| `fileAccessProjects` | Project folders |
| `fileAccessUploads` | Uploads |
| `fileAccessTemp` | Temp folders |
| `fileAccessHome` | Home folder (~) |
| `fileAccessHomeDescription` | Allow reading any file under your home directory. |
| `fileAccessHomeCaution` | caution |
| `fileAccessCustomTitle` | Custom folders |
| `fileAccessCustomDescription` | One absolute path per line. Add / to allow the entire disk. |
| `fileAccessCustomPlaceholder` | /mnt/data<br>/Users/me/screenshots |
| `fileAccessWholeDiskWarning` | A custom entry grants whole-disk read access over HTTP. |
| `fileAccessAllowedFoldersTitle` | Allowed folders |
| `fileAccessEnvPinnedHint` | Set by an environment variable and cannot be edited here. |
| `fileAccessSetViaEnv` | set via ALLOWED_FILE_PATHS |
| `fileAccessNone` | none |
| `localAccessApprovalAuditTitle` | Approval audit log |
| `localAccessApprovalAuditDescription` | Save approve and deny decisions, including tool inputs and commands, to logs/approval-decisions.jsonl. |
| `localAccessApprovalAuditUnsupportedDescription` | This server logs approval decisions but cannot toggle that behavior. Update the server to control it. |
| `agentsPid` | PID {pid} |
| `agentsKill` | Kill |
| `agentsKilling` | Killing… |
| `agentsKillTitle` | Force-stop this agent process |
| `agentsKillConfirm` | Kill "{title}"? This force-stops the agent process and disables auto-resume for the session. |
| `agentsKillVerifiedPid` | Stopped PID {pid} and verified it is no longer running. |
| `agentsKillVerified` | Stopped the agent and verified the provider process exited. |
| `agentsKillResumeBlocked` | Auto-resume disabled for the killed session. |
| `agentsKillResumeBlockFailed` | The process stopped, but auto-resume could not be disabled: {message} |
| `agentsKillResumeBlockUnknown` | Unknown exemption error |
| `agentsKillFailed` | Could not stop the agent: {message} |
| `providerChildFallback` | Provider subagent |
| `providerChildrenCountOne` | {count} provider subagent |
| `providerChildrenCountMany` | {count} provider subagents |
| `fileViewerNewSession` | New session from path |
| `fileViewerOpenImageNewTab` | Open image in new tab |
| `fileLinkDismissMenu` | Dismiss file menu |
| `fileLinkMenuView` | View |
| `fileLinkMenuNewSession` | New session |
| `fileLinkMenuCopyPath` | Copy path |
| `fileLinkMenuCopyContents` | Copy contents |
| `speechListeningPlaceholder` | Listening... |
| `speechTranscribingPlaceholder` | Transcribing... |
| `speechFinalizingPlaceholder` | Finalizing... |
| `speechTranscribingCancel` | Cancel transcription |
