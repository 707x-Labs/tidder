export interface SearchSubreddit {
  user_flair_background_color: unknown;
  submit_text_html: unknown;
  restrict_posting: boolean;
  user_is_banned: unknown;
  free_form_reports: boolean;
  wiki_enabled: boolean;
  user_is_muted: unknown;
  user_can_flair_in_sr: unknown;
  display_name: string;
  header_img: string;
  title: string;
  allow_galleries: boolean;
  icon_size: unknown;
  primary_color: string;
  active_user_count: unknown;
  icon_img: string;
  display_name_prefixed: string;
  accounts_active: unknown;
  public_traffic: boolean;
  subscribers: number;
  user_flair_richtext: unknown[];
  name: string;
  quarantine: boolean;
  hide_ads: boolean;
  prediction_leaderboard_entry_type: number;
  emojis_enabled: boolean;
  advertiser_category: string;
  public_description: string;
  comment_score_hide_mins: number;
  allow_predictions: boolean;
  user_has_favorited: unknown;
  user_flair_template_id: unknown;
  community_icon: string;
  banner_background_image: string;
  original_content_tag_enabled: boolean;
  community_reviewed: boolean;
  submit_text: string;
  description_html: string;
  spoilers_enabled: boolean;
  comment_contribution_settings: CommentContributionSettings;
  allow_talks: boolean;
  header_size: number[];
  user_flair_position: string;
  all_original_content: boolean;
  has_menu_widget: boolean;
  is_enrolled_in_new_modmail: unknown;
  key_color: string;
  can_assign_user_flair: boolean;
  created: number;
  wls: number;
  show_media_preview: boolean;
  submission_type: string;
  user_is_subscriber: unknown;
  allowed_media_in_comments: unknown[];
  allow_videogifs: boolean;
  should_archive_posts: boolean;
  user_flair_type: string;
  allow_polls: boolean;
  collapse_deleted_comments: boolean;
  emojis_custom_size: unknown;
  public_description_html: string;
  allow_videos: boolean;
  is_crosspostable_subreddit: boolean;
  suggested_comment_sort: unknown;
  should_show_media_in_comments_setting: boolean;
  can_assign_link_flair: boolean;
  accounts_active_is_fuzzed: boolean;
  allow_prediction_contributors: boolean;
  submit_text_label: string;
  link_flair_position: string;
  user_sr_flair_enabled: unknown;
  user_flair_enabled_in_sr: boolean;
  allow_discovery: boolean;
  accept_followers: boolean;
  user_sr_theme_enabled: boolean;
  link_flair_enabled: boolean;
  disable_contributor_requests: boolean;
  subreddit_type: string;
  notification_level: unknown;
  banner_img: string;
  user_flair_text: unknown;
  banner_background_color: string;
  show_media: boolean;
  id: string;
  user_is_contributor: unknown;
  over18: boolean;
  header_title: string;
  description: string;
  submit_link_label: string;
  user_flair_text_color: unknown;
  restrict_commenting: boolean;
  user_flair_css_class: unknown;
  allow_images: boolean;
  lang: string;
  url: string;
  created_utc: number;
  banner_size: unknown;
  mobile_banner_image: string;
  user_is_moderator: unknown;
  allow_predictions_tournament: boolean;
}

export interface CommentContributionSettings {
  allowed_media_types: unknown;
}
