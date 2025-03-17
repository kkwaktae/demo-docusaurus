import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apiSidebar: [
    {
      type: "doc",
      id: "api/wavbor-api",
    },
    {
      type: "category",
      label: "artist",
      items: [
        {
          type: "doc",
          id: "api/artist-list",
          label:
            "모든 아티스트 조회 (태그 검색 및 추가 조건 검색 + 메인 화면 Artisttem New & Top + 아티스트 상세 당신이 좋아할만한 아티스트)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/artist-me-retrieve",
          label: "아티스트 내 프로젝트 사이드에 있는 아티스트 정보",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/artist-profile-retrieve",
          label: "아티스트 정보 - 프로필",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/artist-profile-update",
          label: "아티스트 정보 - 프로필 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/artist-profile-partial-update",
          label: "아티스트 정보 - 프로필 부분 수정",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/artist-virtual-retrieve",
          label: "아티스트 데이터 가상화",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/artist-retrieve",
          label: "아티스트 상세 조회 -> artisttem에서 검색한 아티스트 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/artist-update",
          label:
            "아티스트 정보 수정 (`아티스트 정보 등록`이 완료된 사용자만 가능 -> is_switch_confirm=True, is_artist=True)",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/artist-bank-retrieve",
          label: "아티스트 계좌관리",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/artist-bank-update",
          label: "아티스트 계좌관리",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/artist-discography-list",
          label: "Discography 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/artist-follow-create",
          label: "아티스트 팔로우 / 언팔로우",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "artist_switch_request",
      items: [
        {
          type: "doc",
          id: "api/artist-switch-request-create",
          label: "아티스트 전환 신청 등록",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/artist-switch-request-check-national-create",
          label: "실명확인",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/artist-switch-request-retrieve",
          label: "아티스트 전환 신청 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/artist-switch-request-update",
          label: "아티스트 전환 신청 수정",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "bank",
      items: [
        {
          type: "doc",
          id: "api/bank-list",
          label: "은행 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "chat",
      items: [
        {
          type: "doc",
          id: "api/chat-list",
          label: "Chat 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/chat-create",
          label: "Chat 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/chat-invite-confirm-create",
          label: "채팅방 초대 수락",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/chat-new-retrieve",
          label: "글로벌 채팅 읽지않음 상태 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/chat-read-create",
          label: "읽지않은 메세지 읽음처리",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/chat-unread-retrieve",
          label: "읽지않은 새 메세지 정보",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/chat-retrieve",
          label: "Chat 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/chat-update",
          label: "Chat 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/chat-connect-update",
          label: "채팅방 입장여부 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/chat-exit-update",
          label: "채팅방 나가기",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "collaboration",
      items: [
        {
          type: "doc",
          id: "api/collaboration-list",
          label: "Collaboration 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/collaboration-retrieve",
          label: "Collaboration 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/collaboration-is-participation-retrieve",
          label: "Collaboration 참여 여부 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "collaboration_participant",
      items: [
        {
          type: "doc",
          id: "api/collaboration-participant-create",
          label: "CollaborationParticipant 등록",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "comment",
      items: [
        {
          type: "doc",
          id: "api/comment-create",
          label: "Comment 등록",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/comment-update",
          label: "Comment 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/comment-destroy",
          label: "Comment 삭제",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "contact",
      items: [
        {
          type: "doc",
          id: "api/contact-list",
          label: "컨택 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/contact-create",
          label: "컨택 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/contact-count-retrieve",
          label: "컨텍 카운트",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/contact-notification-count-retrieve",
          label: "알림 컨텍 카운트",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/contact-retrieve",
          label: "컨택 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/contact-update",
          label: "컨택 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/contact-additional-proposal-create",
          label: "추가제안서 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/contact-additional-proposal-retrieve",
          label: "추가제안서 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/contact-additional-proposal-apply-update",
          label: "추가제안서 수락",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/contact-complete-create",
          label: "컨텍 작업 종료",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/contact-contact-cancel-reason-create",
          label: "컨택 취소 사유 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/contact-contact-reject-reason-create",
          label: "컨택 거절 사유 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/contact-feedback-create",
          label: "피드백 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/contact-feedback-retrieve",
          label: "피드백 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/contact-feedback-update",
          label: "피드백 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/contact-proposal-create",
          label: "제안서 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/contact-proposal-retrieve",
          label: "제안서 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/contact-proposal-update",
          label: "제안서 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/contact-publication-rights-data-request-create",
          label: "자료 요청 생성",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "curation",
      items: [
        {
          type: "doc",
          id: "api/curation-list",
          label: "Curation 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/curation-retrieve",
          label: "Curation 상세 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "event",
      items: [
        {
          type: "doc",
          id: "api/event-create",
          label: "이벤트 등록",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/event-retrieve",
          label: "이벤트 상세 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "folder",
      items: [
        {
          type: "doc",
          id: "api/folder-list",
          label: "Folder 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/folder-create",
          label: "Folder 등록",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/folder-retrieve",
          label: "Folder 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/folder-update",
          label: "Folder 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/folder-destroy",
          label: "Folder 삭제",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "follow",
      items: [
        {
          type: "doc",
          id: "api/follow-list",
          label: "팔로우 정보",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "genre",
      items: [
        {
          type: "doc",
          id: "api/genre-list",
          label: "Genre 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "instruments",
      items: [
        {
          type: "doc",
          id: "api/instruments-list",
          label: "작업분야 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "interview",
      items: [
        {
          type: "doc",
          id: "api/interview-list",
          label: "Interview 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/interview-retrieve",
          label: "interview_retrieve",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "language",
      items: [
        {
          type: "doc",
          id: "api/language-list",
          label: "아티스트 언어 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "main_banner",
      items: [
        {
          type: "doc",
          id: "api/main-banner-list",
          label: "Banner 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/main-banner-retrieve",
          label: "main_banner_retrieve",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/main-banner-hit-count-update",
          label: "Banner 조회수 증가",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "media",
      items: [
        {
          type: "doc",
          id: "api/media-list",
          label: "Media 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/media-create",
          label: "Media 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/media-retrieve",
          label: "Media 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/media-update",
          label: "Media 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/media-partial-update",
          label: "media_partial_update",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/media-destroy",
          label: "Media 삭제",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "message",
      items: [
        {
          type: "doc",
          id: "api/message-list",
          label: "Message 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/message-create",
          label: "Message 등록",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "mood",
      items: [
        {
          type: "doc",
          id: "api/mood-list",
          label: "Mood 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "music_product_team",
      items: [
        {
          type: "doc",
          id: "api/music-product-team-list",
          label: "MusicProductTeam 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "notification",
      items: [
        {
          type: "doc",
          id: "api/notification-list",
          label: "Notification 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/notification-reverse-read-create",
          label: "Reverse Notification 읽음 처리",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/notification-retrieve",
          label: "Notification 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/notification-read-update",
          label: "Notification 읽음 처리",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "partner_company",
      items: [
        {
          type: "doc",
          id: "api/partner-company-list",
          label: "협력사 아이콘 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "payment",
      items: [
        {
          type: "doc",
          id: "api/payment-list",
          label: "결제내역 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payment-create",
          label: "결제 기본 데이터 생성",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payment-webhook-create",
          label: "나이스페이먼츠 웹훅",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payment-retrieve",
          label: "결제내역 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payment-confirm-retrieve",
          label: "결제 승인",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payment-confirm-create",
          label: "결제 승인",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "popup",
      items: [
        {
          type: "doc",
          id: "api/popup-list",
          label: "Popup 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/popup-retrieve",
          label: "Popup 상세 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "presigned_url",
      items: [
        {
          type: "doc",
          id: "api/presigned-url-create",
          label: "미리 서명된 URL 발급",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "promotion",
      items: [
        {
          type: "doc",
          id: "api/promotion-list",
          label: "Promotion 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/promotion-retrieve",
          label: "Promotion 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/promotion-is-participation-retrieve",
          label: "Promotion 창여 여부 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "promotion_participant",
      items: [
        {
          type: "doc",
          id: "api/promotion-participant-create",
          label: "PromotionParticipant 등록",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "question",
      items: [
        {
          type: "doc",
          id: "api/question-list",
          label: "아티스트 질문 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "refund_request",
      items: [
        {
          type: "doc",
          id: "api/refund-request-create",
          label: "환불요청/작업중단 생성",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "region",
      items: [
        {
          type: "doc",
          id: "api/region-list",
          label: "Region 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "review",
      items: [
        {
          type: "doc",
          id: "api/review-list",
          label: "리뷰 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/review-create",
          label: "리뷰 등록",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/review-exists-retrieve",
          label: "리뷰 작성여부 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/review-retrieve",
          label: "리뷰 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/review-update",
          label: "리뷰 수정",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "search_banner",
      items: [
        {
          type: "doc",
          id: "api/search-banner-list",
          label: "검색화면 배너 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "settlement",
      items: [
        {
          type: "doc",
          id: "api/settlement-list",
          label: "수익관리 전체내역",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/settlement-dashboard-retrieve",
          label: "수익관리 대시보드 (상단 + 최근 1년 내역)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/settlement-retrieve",
          label: "수익관리 전체내역 -> 수익 상세내역",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "style",
      items: [
        {
          type: "doc",
          id: "api/style-list",
          label: "Style 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "tag",
      items: [
        {
          type: "doc",
          id: "api/tag-list",
          label: "아티스트 태그 목록 조회",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "topic",
      items: [
        {
          type: "doc",
          id: "api/topic-list",
          label: "Topic 목록 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/topic-create",
          label: "Topic 등록",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/topic-retrieve",
          label: "Topic 상세 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/topic-update",
          label: "Topic 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/topic-destroy",
          label: "Topic 삭제",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      items: [
        {
          type: "doc",
          id: "api/user-channeltalk-retrieve",
          label: "채널톡 데이터 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/user-crypto-token-retrieve",
          label: "본인인증 암호화 토큰 발급",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/user-get-enc-data-retrieve",
          label: "표준창서비스 호출 결과 반환",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/user-login-create",
          label: "유저 로그인(테스트용 임시)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/user-refresh-create",
          label: "유저 리프레시",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/user-register-create",
          label: "유저 회원가입",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/user-social-login-create",
          label: "유저 소셜 로그인",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/user-retrieve",
          label: "내 정보 관리 - 조회",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/user-update",
          label: "내 정보 관리 - 수정",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/user-destroy",
          label: "user_destroy",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/user-my-project-retrieve",
          label: "내 프로젝트",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/user-view-update",
          label: "유저가 현재 보고 있는 화면 수정",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
