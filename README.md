I'm Clover, a postgraduate from Fudan University, interested in Rust Programming and AI. Now I'm learning the rust compiler.

I'm active in Rust Community, mainly in Zulip. My open talks are here: 
- [Different output when testing std::ptr::copy by miri](https://rust-lang.zulipchat.com/#narrow/channel/136281-t-opsem/topic/Different.20output.20when.20testing.20std.3A.3Aptr.3A.3Acopy.20by.20miri/with/595183915)
- [Provide the meaning of "Valid" to Understand.](https://rust-lang.zulipchat.com/#narrow/channel/425075-rust-for-linux/topic/Provide.20the.20.20meaning.20of.20.22Valid.22.20to.20Understand.2E/with/539809062)
- [How CStr::from_bytes_with_nul_unchecked  deal with nul?](https://rust-lang.zulipchat.com/#narrow/channel/219381-t-libs/topic/How.20CStr.3A.3Afrom_bytes_with_nul_unchecked.20.20deal.20with.20nul.3F/with/532919235)
- [Review about the safety comment related to List::remove](https://rust-lang.zulipchat.com/#narrow/channel/425075-rust-for-linux/topic/Review.20about.20the.20safety.20comment.20related.20to.20List.3A.3Aremove/with/568259521  )


![Metrics](/github-metrics.svg)

I have opened some issues and PRs in many Rust crate repositories:

## Issues
<!-- ISSUE-LIST:START -->
- **awxkee/pxfm**: [UB found by Miri](https://github.com/awxkee/pxfm/issues/91) — 2026-07-03 — state: Closed
- **bluealloy/revm**: [UB found by miri](https://github.com/bluealloy/revm/issues/3776) — 2026-06-24 — state: Open
- **mitsuhiko/elementtree-rust**: [Undefined Behaviour find by Miri](https://github.com/mitsuhiko/elementtree-rust/issues/23) — 2026-06-24 — state: Open
- **dcuddeback/ioctl-rs**: [UB found by miri: Uninitialized memory](https://github.com/dcuddeback/ioctl-rs/issues/9) — 2026-06-24 — state: Open
- **paritytech/reed-solomon-novelpoly**: [UB found by Miri: uninitialized memory in inverse_afft](https://github.com/paritytech/reed-solomon-novelpoly/issues/44) — 2026-06-24 — state: Open
- **kornelski/rust-lcms2-sys**: [UB found by miri: default() construct invalid value](https://github.com/kornelski/rust-lcms2-sys/issues/6) — 2026-06-24 — state: Open
- **rustadopt/jzon-rs**: [UB found by miri in DumpGenerator and PrettyGenerator](https://github.com/rustadopt/jzon-rs/issues/20) — 2026-06-23 — state: Open
- **sozu-proxy/circular**: [UB found by Miri](https://github.com/sozu-proxy/circular/issues/11) — 2026-06-23 — state: Open
- **VoidStarKat/widestring-rs**: [Utf32String::insert_utfstr/ insert: Potential Undefined Behaviour find by Miri](https://github.com/VoidStarKat/widestring-rs/issues/51) — 2026-05-10 — state: Open
- **Stebalien/str_stack**: [Undefined Behaviour find by Miri](https://github.com/Stebalien/str_stack/issues/4) — 2026-05-10 — state: Closed
- **rust-scraper/scraper**: [Potential Undefined Behavior Reported by Miri](https://github.com/rust-scraper/scraper/issues/316) — 2026-05-09 — state: Closed
- **tafia/quick-protobuf**: [Potential Undefined Behavior Reported by Miri in BytesReader](https://github.com/tafia/quick-protobuf/issues/272) — 2026-04-30 — state: Open
- **tokio-rs/tokio**: [Potential Undefined Behavior Reported by Miri: Using mem::uninitialized()](https://github.com/tokio-rs/tokio/issues/8055) — 2026-04-16 — state: Closed
- **awxkee/pxfm**: [Potential Undefined Behavior Reported by Miri: f_powm1](https://github.com/awxkee/pxfm/issues/88) — 2026-04-16 — state: Closed
- **awxkee/pxfm**: [Potential Undefined Behavior Reported by Miri: In exp2m1f_gen and exp10f_gen](https://github.com/awxkee/pxfm/issues/87) — 2026-04-16 — state: Closed
- **ParkMyCar/compact_str**: [Potential Undefined Behavior Reported by Miri](https://github.com/ParkMyCar/compact_str/issues/452) — 2026-04-16 — state: Closed
- **NLnetLabs/domain**: [Dnskey::parse bypasses 16-bit RDATA length invariant via new_unchecked](https://github.com/NLnetLabs/domain/issues/621) — 2026-03-11 — state: Closed
- **Manishearth/elsa**: [FrozenVec::push_get is unsound under reentrant StableDeref implementations](https://github.com/Manishearth/elsa/issues/99) — 2026-03-11 — state: Open
- **tree-sitter/tree-sitter**: [InputEdit::edit_point accepts internally inconsistent edits without validation](https://github.com/tree-sitter/tree-sitter/issues/5424) — 2026-03-11 — state: Closed
- **anza-xyz/solana-sdk**: [Soundness issue: AccountInfo::resize can trigger UB from safe code when AccountInfo is created via AccountInfo::new](https://github.com/anza-xyz/solana-sdk/issues/619) — 2026-03-11 — state: Closed
- **rustgd/cgmath**: [Soundness issue: Matrix2/Matrix3/Matrix4 swap_columns can trigger UB in Safe Rust when a == b](https://github.com/rustgd/cgmath/issues/565) — 2026-03-11 — state: Open
- **tokio-rs/loom**: [Potential soundness issue in loom::lazy_static::Lazy::get returning static reference beyond execution lifetime](https://github.com/tokio-rs/loom/issues/406) — 2026-03-11 — state: Open
- **dudykr/ddbase**: [Soundness issue: BytesString::split_off can break UTF-8 invariant and cause UB via safe APIs](https://github.com/dudykr/ddbase/issues/90) — 2026-03-11 — state: Closed
- **http-rs/http-types**: [{Authorization, WwwAuthenticate}::value can construct a non-ASCII HeaderValue through Safe Rust](https://github.com/http-rs/http-types/issues/534) — 2026-03-11 — state: Open
- **unicode-org/icu4x**: [Soundness issue: from_utf8_lossy and from_utf16_lossy can trigger UB from Safe Rust with non-ASCII replacement](https://github.com/unicode-org/icu4x/issues/7766) — 2026-03-11 — state: Closed
- **apache/arrow-rs**: [arrow-buffer: Potential Undefined Behavior Reported by Miri](https://github.com/apache/arrow-rs/issues/9289) — 2026-01-28 — state: Closed
- **apache/arrow-rs**: [arrow-buffer: Potential Undefined Behavior Reported by Miri](https://github.com/apache/arrow-rs/issues/9287) — 2026-01-28 — state: Closed
- **apache/arrow-rs**: [arrow-buffer: Potential Undefined Behavior Reported by Miri](https://github.com/apache/arrow-rs/issues/9286) — 2026-01-28 — state: Closed
- **huanli-00/Safe4U-replication**: [Error emerges when run "cargo run target"](https://github.com/huanli-00/Safe4U-replication/issues/1) — 2026-01-24 — state: Closed
- **DragonOS-Community/DragonOS**: [[BUG REPORT] read_all_from_buf中可能存在指针未对齐导致UB](https://github.com/DragonOS-Community/DragonOS/issues/1539) — 2025-12-22 — state: Closed
- **DragonOS-Community/DragonOS**: [[BUG REPORT] unix ring_buffer 未检测参数范围可能导致panic](https://github.com/DragonOS-Community/DragonOS/issues/1536) — 2025-12-22 — state: Closed
- **DragonOS-Community/DragonOS**: [[BUG REPORT] TCP socket listen/close 方法存在资源泄露问题](https://github.com/DragonOS-Community/DragonOS/issues/1520) — 2025-12-20 — state: Open
- **DragonOS-Community/DragonOS**: [[BUG REPORT] TCP listen()函数缺少backlog参数校验，backlog=0导致整数下溢](https://github.com/DragonOS-Community/DragonOS/issues/1519) — 2025-12-20 — state: Open
- **smol-rs/parking**: [Potential DeadLock Reported by Miri](https://github.com/smol-rs/parking/issues/29) — 2025-10-10 — state: Open
- **matklad/once_cell**: [Potential DeadLock Reported by Miri](https://github.com/matklad/once_cell/issues/293) — 2025-10-10 — state: Open
- **actix/actix-net**: [Potential DeadLock Reported by Miri](https://github.com/actix/actix-net/issues/746) — 2025-10-10 — state: Closed
- **bodil/bitmaps**: [Potential Undefined Behavior Reported by Miri](https://github.com/bodil/bitmaps/issues/33) — 2025-10-09 — state: Open
- **avitex/rust-aliasable**: [Potential Undefined Behavior Reported by Miri](https://github.com/avitex/rust-aliasable/issues/9) — 2025-10-08 — state: Open
<!-- ISSUE-LIST:END -->

## Pull Requests
<!-- PR-LIST:START -->
- **rust-lang/rust**: [Add supplementary information for get_unchecked(mut)](https://github.com/rust-lang/rust/pull/158810) — 2026-07-05 — state: Merged
- **rust-lang/rust**: [Fix inconsistent safety requirement in VecDeque::nonoverlapping_ranges](https://github.com/rust-lang/rust/pull/158433) — 2026-06-26 — state: Merged
- **rust-lang/rust**: [Add safety section for DisjointBitor::disjoint_bitor](https://github.com/rust-lang/rust/pull/158383) — 2026-06-25 — state: Closed
- **rust-lang/rust**: [Add safety section for SliceIndex::get_unchecked(mut)](https://github.com/rust-lang/rust/pull/158382) — 2026-06-25 — state: Merged
- **rust-lang/rust**: [Fix incorrect unsafe debug assertion in unchecked_div_exact](https://github.com/rust-lang/rust/pull/158314) — 2026-06-23 — state: Merged
- **rustsec/advisory-db**: [Add advisory for http-types: violated ASCII invariants](https://github.com/rustsec/advisory-db/pull/2923) — 2026-05-28 — state: Merged
- **rustsec/advisory-db**: [Add advisory for domain: Dnskey::parse bypass the 16-bit RDATA length invariant](https://github.com/rustsec/advisory-db/pull/2922) — 2026-05-28 — state: Closed
- **rustsec/advisory-db**: [Add advisory for loom: Lazy::get can return a dangling &'static reference](https://github.com/rustsec/advisory-db/pull/2920) — 2026-05-28 — state: Closed
- **rustsec/advisory-db**: [Add advisory for bytes-str: BytesString::split_off can break UTF-8 invariant](https://github.com/rustsec/advisory-db/pull/2919) — 2026-05-28 — state: Closed
- **tokio-rs/loom**: [Fix #406](https://github.com/tokio-rs/loom/pull/410) — 2026-05-28 — state: Open
- **anza-xyz/solana-sdk**: [stable-layout: change fields visibility of StableVec<T> from public to private](https://github.com/anza-xyz/solana-sdk/pull/740) — 2026-05-26 — state: Open
- **libpnet/libpnet**: [pnet_sys: change visibility of FileDesc.fd from public to private](https://github.com/libpnet/libpnet/pull/768) — 2026-05-26 — state: Open
- **alloy-rs/nybbles**: [change debug_assert!() to assert!() in Nibbles::len()](https://github.com/alloy-rs/nybbles/pull/57) — 2026-05-26 — state: Closed
- **rust-lang/rust**: [rustdoc: Prototype implement RFC 3842 with safety::requires attribute](https://github.com/rust-lang/rust/pull/155201) — 2026-04-12 — state: Open
- **DragonOS-Community/DragonOS**: [Add assert in ring_buffer.rs](https://github.com/DragonOS-Community/DragonOS/pull/1537) — 2025-12-22 — state: Closed
<!-- PR-LIST:END -->
