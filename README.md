I'm Clover, a postgraduate from Fudan University, interested in Rust Programming and AI. Now I'm learning the rust compiler.

I'm active in Rust Community, mainly in Zulip. My open talks are here: 
- [Different output when testing std::ptr::copy by miri](https://rust-lang.zulipchat.com/#narrow/channel/136281-t-opsem/topic/Different.20output.20when.20testing.20std.3A.3Aptr.3A.3Acopy.20by.20miri/with/595183915)
- [Provide the meaning of "Valid" to Understand.](https://rust-lang.zulipchat.com/#narrow/channel/425075-rust-for-linux/topic/Provide.20the.20.20meaning.20of.20.22Valid.22.20to.20Understand.2E/with/539809062)
- [How CStr::from_bytes_with_nul_unchecked  deal with nul?](https://rust-lang.zulipchat.com/#narrow/channel/219381-t-libs/topic/How.20CStr.3A.3Afrom_bytes_with_nul_unchecked.20.20deal.20with.20nul.3F/with/532919235)
- [Review about the safety comment related to List::remove](https://rust-lang.zulipchat.com/#narrow/channel/425075-rust-for-linux/topic/Review.20about.20the.20safety.20comment.20related.20to.20List.3A.3Aremove/with/568259521  )
- [Maybe some safety doc need fixs in intrinsics::simd](https://rust-lang.zulipchat.com/#narrow/channel/131828-t-compiler/topic/Maybe.20some.20safety.20doc.20need.20fixs.20in.20intrinsics.3A.3Asimd)


![Metrics](/github-metrics.svg)

I have opened some issues and PRs in many Rust crate repositories:

## Issues
<!-- ISSUE-LIST:START -->
- **bevyengine/bevy**: [UB found in EntityWorldMut::replace_children in multi-threaded with pure safe code](https://github.com/bevyengine/bevy/issues/25349) — 2026-08-10 — state: Open
- **bevyengine/bevy**: [`initialize_renderer` can panic on macOS when safely polled from a worker thread](https://github.com/bevyengine/bevy/issues/25255) — 2026-08-01 — state: Open
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
- **yilin0518/tag-rust-for-linux**: [Add missing concrete definition for "valid pointer" and reduce redundance in safety comment](https://github.com/yilin0518/tag-rust-for-linux/issues/1) — 2025-12-03 — state: Open
- **smol-rs/parking**: [Potential DeadLock Reported by Miri](https://github.com/smol-rs/parking/issues/29) — 2025-10-10 — state: Open
- **matklad/once_cell**: [Potential DeadLock Reported by Miri](https://github.com/matklad/once_cell/issues/293) — 2025-10-10 — state: Open
- **actix/actix-net**: [Potential DeadLock Reported by Miri](https://github.com/actix/actix-net/issues/746) — 2025-10-10 — state: Closed
- **bodil/bitmaps**: [Potential Undefined Behavior Reported by Miri](https://github.com/bodil/bitmaps/issues/33) — 2025-10-09 — state: Open
- **avitex/rust-aliasable**: [Potential Undefined Behavior Reported by Miri](https://github.com/avitex/rust-aliasable/issues/9) — 2025-10-08 — state: Open
- **hxuhack/compiler_project**: [debug可执行文件时出现段错误](https://github.com/hxuhack/compiler_project/issues/29) — 2024-06-08 — state: Open
- **hxuhack/compiler_project**: [关于spill部分的实现](https://github.com/hxuhack/compiler_project/issues/27) — 2024-06-07 — state: Closed
- **hxuhack/compiler_project**: [lab5关于配置环境问题](https://github.com/hxuhack/compiler_project/issues/26) — 2024-06-06 — state: Closed
- **hxuhack/compiler_project**: [生成ll文件但是链接错误](https://github.com/hxuhack/compiler_project/issues/24) — 2024-05-16 — state: Open
- **hxuhack/compiler_project**: [活跃分析中的succ](https://github.com/hxuhack/compiler_project/issues/23) — 2024-05-14 — state: Open
- **hxuhack/compiler_project**: [关于mem2reg的设计思路的猜测](https://github.com/hxuhack/compiler_project/issues/22) — 2024-05-14 — state: Open
- **hxuhack/compiler_project**: [解析器构造成功但是无法解析文件](https://github.com/hxuhack/compiler_project/issues/6) — 2024-03-14 — state: Closed
<!-- ISSUE-LIST:END -->

## Pull Requests
<!-- PR-LIST:START -->
- **rust-lang/rust**: [Add safety comments in alloc::Wtf8](https://github.com/rust-lang/rust/pull/161292) — 2026-08-18 — state: Merged
- **rust-lang/rust**: [doc: document safety requirements for core WTF-8](https://github.com/rust-lang/rust/pull/161271) — 2026-08-18 — state: Merged
- **bevyengine/bevy**: [Bevy_reflect: Use into_remote to replace transmute in ReflectRemote impl](https://github.com/bevyengine/bevy/pull/25351) — 2026-08-10 — state: Merged
- **bevyengine/bevy**: [Fix: replace fixed comps with comps calculation](https://github.com/bevyengine/bevy/pull/25293) — 2026-08-04 — state: Open
- **bevyengine/bevy**: [Fix: remove unnecessary unsafe of ErasedBundleTemplate::apply](https://github.com/bevyengine/bevy/pull/25279) — 2026-08-03 — state: Open
- **bevyengine/bevy**: [Fix from raw parts](https://github.com/bevyengine/bevy/pull/25277) — 2026-08-03 — state: Merged
- **bevyengine/bevy**: [Add missing safety requirement](https://github.com/bevyengine/bevy/pull/25272) — 2026-08-02 — state: Open
- **bevyengine/bevy**: [Add explicit transfer safety requirement](https://github.com/bevyengine/bevy/pull/25271) — 2026-08-02 — state: Open
- **bevyengine/bevy**: [Add missing safety requirement](https://github.com/bevyengine/bevy/pull/25269) — 2026-08-02 — state: Merged
- **bevyengine/bevy**: [Mark RawHandleWrapper::set_display_handle as unsafe](https://github.com/bevyengine/bevy/pull/25267) — 2026-08-02 — state: Merged
- **rust-lang/rust**: [Clarify safety requirements for SIMD shl/shr and masked load/store](https://github.com/rust-lang/rust/pull/159402) — 2026-07-16 — state: Merged
- **rust-lang/rust**: [Fix safety doc in intrinsics::simd](https://github.com/rust-lang/rust/pull/159322) — 2026-07-15 — state: Merged
- **rust-lang/stdarch**: [Add align requirement in _mm_stream_si32 and _mm_stream_si64](https://github.com/rust-lang/stdarch/pull/2183) — 2026-07-07 — state: Merged
- **rust-lang/rust**: [Add alignment requirements for _mm_stream_si32 and _mm_stream_si64](https://github.com/rust-lang/rust/pull/158892) — 2026-07-07 — state: Closed
- **rust-lang/rust**: [Add supplementary information for get_unchecked(mut)](https://github.com/rust-lang/rust/pull/158810) — 2026-07-05 — state: Merged
- **safer-rust/rust**: [Make `get_unchecked(_mut)` docs consistent](https://github.com/safer-rust/rust/pull/9) — 2026-07-05 — state: Closed
- **rust-lang/rust**: [Clarify `as_uninit_mut` may point to uninitialized memory](https://github.com/rust-lang/rust/pull/158804) — 2026-07-05 — state: Merged
- **rust-lang/rust**: [Fix inconsistent safety requirement in VecDeque::nonoverlapping_ranges](https://github.com/rust-lang/rust/pull/158433) — 2026-06-26 — state: Merged
- **rust-lang/rust**: [Add safety section for DisjointBitor::disjoint_bitor](https://github.com/rust-lang/rust/pull/158383) — 2026-06-25 — state: Closed
- **rust-lang/rust**: [Add safety section for SliceIndex::get_unchecked(mut)](https://github.com/rust-lang/rust/pull/158382) — 2026-06-25 — state: Merged
- **rust-lang/rust**: [Fix incorrect unsafe debug assertion in unchecked_div_exact](https://github.com/rust-lang/rust/pull/158314) — 2026-06-23 — state: Merged
- **rustsec/advisory-db**: [Add advisory for http-types: violated ASCII invariants](https://github.com/rustsec/advisory-db/pull/2923) — 2026-05-28 — state: Merged
- **rustsec/advisory-db**: [Add advisory for domain: Dnskey::parse bypass the 16-bit RDATA length invariant](https://github.com/rustsec/advisory-db/pull/2922) — 2026-05-28 — state: Closed
- **rustsec/advisory-db**: [Add advisory for loom: Lazy::get can return a dangling &'static reference](https://github.com/rustsec/advisory-db/pull/2920) — 2026-05-28 — state: Closed
- **rustsec/advisory-db**: [Add advisory for bytes-str: BytesString::split_off can break UTF-8 invariant](https://github.com/rustsec/advisory-db/pull/2919) — 2026-05-28 — state: Closed
- **tokio-rs/loom**: [Fix #406](https://github.com/tokio-rs/loom/pull/410) — 2026-05-28 — state: Open
- **anza-xyz/solana-sdk**: [stable-layout: change fields visibility of StableVec<T> from public to private](https://github.com/anza-xyz/solana-sdk/pull/740) — 2026-05-26 — state: Merged
- **libpnet/libpnet**: [pnet_sys: change visibility of FileDesc.fd from public to private](https://github.com/libpnet/libpnet/pull/768) — 2026-05-26 — state: Open
- **alloy-rs/nybbles**: [change debug_assert!() to assert!() in Nibbles::len()](https://github.com/alloy-rs/nybbles/pull/57) — 2026-05-26 — state: Closed
- **yilin0518/yilin0518**: [Add manual README issue/PR updater and blog-style homepage](https://github.com/yilin0518/yilin0518/pull/2) — 2026-05-16 — state: Merged
- **yilin0518/yilin0518**: [[WIP] Add features to personal GitHub website](https://github.com/yilin0518/yilin0518/pull/1) — 2026-05-15 — state: Merged
- **rust-lang/rust**: [rustdoc: Prototype implement RFC 3842 with safety::requires attribute](https://github.com/rust-lang/rust/pull/155201) — 2026-04-12 — state: Open
- **safer-rust/rust**: [Support "{Tag}={description}" format, with customized Tag and description](https://github.com/safer-rust/rust/pull/8) — 2026-04-08 — state: Closed
- **safer-rust/rust**: [Injecting safety documentation based on "#[safety::requires()]" attribute and the provided safety spec.](https://github.com/safer-rust/rust/pull/7) — 2026-04-05 — state: Merged
- **safer-rust/rust**: [Expand safety documentation with TOML specification](https://github.com/safer-rust/rust/pull/6) — 2026-04-02 — state: Merged
- **safer-rust/rust**: [Expand safety documentation placeholders using a TOML specification file](https://github.com/safer-rust/rust/pull/5) — 2026-04-02 — state: Merged
- **safer-rust/std-unsafe-doc**: [Add functions to normalize JSON IDs and map re-export paths](https://github.com/safer-rust/std-unsafe-doc/pull/18) — 2026-04-01 — state: Merged
- **safer-rust/rust**: [Expand safety documentation with TOML specification](https://github.com/safer-rust/rust/pull/4) — 2026-04-01 — state: Merged
- **safer-rust/rust**: [Add safety-tool component with POC for safety tags](https://github.com/safer-rust/rust/pull/3) — 2026-03-24 — state: Merged
- **safer-rust/rust**: [Add safety-tool component with POC for safety tags](https://github.com/safer-rust/rust/pull/2) — 2026-03-24 — state: Closed
- **safer-rust/rust**: [Add safety-tool as  a new component of rust tools](https://github.com/safer-rust/rust/pull/1) — 2026-03-23 — state: Closed
- **safer-rust/linux-unsafe-doc**: [Add unsafe API collector and update GitHub Pages workflow](https://github.com/safer-rust/linux-unsafe-doc/pull/1) — 2026-03-04 — state: Merged
- **yilin0518/linux-unsafe-doc**: [[WIP] Fix GitHub Action error in Jekyll build phase](https://github.com/yilin0518/linux-unsafe-doc/pull/3) — 2026-03-04 — state: Merged
- **yilin0518/linux-unsafe-doc**: [Update Pages workflow to regenerate rust-for-linux unsafe docs from latest upstream commit](https://github.com/yilin0518/linux-unsafe-doc/pull/2) — 2026-03-04 — state: Merged
- **yilin0518/linux-unsafe-doc**: [Add GitHub Actions workflow to deploy GitHub Pages from rust-for-linux/](https://github.com/yilin0518/linux-unsafe-doc/pull/1) — 2026-03-04 — state: Merged
- **safer-rust/std-unsafe-doc**: [Enhance rustdoc URL generation and include rustc version in output](https://github.com/safer-rust/std-unsafe-doc/pull/17) — 2026-03-04 — state: Merged
- **safer-rust/RAPx**: [Fix(default alias-analysis): rework SCC path enumeration, SwitchInt constraints, and caching](https://github.com/safer-rust/RAPx/pull/228) — 2026-02-03 — state: Merged
- **DragonOS-Community/DragonOS**: [Add assert in ring_buffer.rs](https://github.com/DragonOS-Community/DragonOS/pull/1537) — 2025-12-22 — state: Closed
- **Artisan-Lab/tag-rust-for-linux**: [Modify the safety description about "valid pointer"](https://github.com/Artisan-Lab/tag-rust-for-linux/pull/4) — 2025-12-04 — state: Closed
- **Artisan-Lab/tag-rust-for-linux**: [Consistent with current Rust-for-linux repo, add SPs in kernel](https://github.com/Artisan-Lab/tag-rust-for-linux/pull/3) — 2025-12-03 — state: Merged
- **safer-rust/safety-tags**: [Adjust definition of some Rust-for-linux SP](https://github.com/safer-rust/safety-tags/pull/77) — 2025-12-02 — state: Merged
- **safer-rust/safety-tags**: [Add complete Rust-for-linux markdown and toml file ](https://github.com/safer-rust/safety-tags/pull/73) — 2025-11-25 — state: Merged
- **safer-rust/safety-tags**: [Add basic Rust-for-linux safety properties, not completed](https://github.com/safer-rust/safety-tags/pull/71) — 2025-11-17 — state: Merged
- **WIZeaz/RAP**: [Add re-exported path for type](https://github.com/WIZeaz/RAP/pull/14) — 2025-09-28 — state: Merged
- **WIZeaz/RAP**: [re-factor code, fix error in outputing re-exported path, now can outp…](https://github.com/WIZeaz/RAP/pull/13) — 2025-09-27 — state: Merged
- **WIZeaz/RAP**: [For trait impl, generate type::trait_method format](https://github.com/WIZeaz/RAP/pull/12) — 2025-09-26 — state: Merged
- **WIZeaz/RAP**: [Update visible.path.rs，generate re-exported path both for APIs and methods](https://github.com/WIZeaz/RAP/pull/11) — 2025-09-24 — state: Merged
- **WIZeaz/RAP**: [Fix error in re-exported function, add ultimate path in output](https://github.com/WIZeaz/RAP/pull/10) — 2025-09-22 — state: Closed
- **WIZeaz/RAP**: [Generate re-exported path, given def_id and args](https://github.com/WIZeaz/RAP/pull/9) — 2025-09-22 — state: Merged
- **LearningOS/rustling-classroom-2025a-rustling-rustling-25A-template**: [Update](https://github.com/LearningOS/rustling-classroom-2025a-rustling-rustling-25A-template/pull/4) — 2025-09-21 — state: Open
- **LearningOS/rustling-classroom-2025s-rustling-25S-template**: [finish all tests](https://github.com/LearningOS/rustling-classroom-2025s-rustling-25S-template/pull/11) — 2025-09-20 — state: Open
- **safer-rust/safety-tags**: [Fix display error in os-sp.md](https://github.com/safer-rust/safety-tags/pull/61) — 2025-09-16 — state: Merged
- **safer-rust/safety-tags**: [Add Rust-for-linux SP docs](https://github.com/safer-rust/safety-tags/pull/57) — 2025-08-19 — state: Merged
- **safer-rust/safety-tags**: [fix error discriptions in std.json, which are already reviewed](https://github.com/safer-rust/safety-tags/pull/38) — 2025-07-27 — state: Merged
- **safer-rust/safety-tags**: [fix error in std.json](https://github.com/safer-rust/safety-tags/pull/33) — 2025-07-25 — state: Merged
- **WIZeaz/RAP**: [Add get_trimmed_path() in input.rs ](https://github.com/WIZeaz/RAP/pull/8) — 2025-06-23 — state: Merged
- **safer-rust/RAPx-Book**: [Update 5.2-api.md](https://github.com/safer-rust/RAPx-Book/pull/9) — 2025-04-28 — state: Merged
- **WIZeaz/RAP**: [delete redundant member in api_dependency graph](https://github.com/WIZeaz/RAP/pull/7) — 2025-04-27 — state: Merged
- **WIZeaz/RAP**: [delete reduntant member in api_graph, realize main content in RULF](https://github.com/WIZeaz/RAP/pull/6) — 2025-04-27 — state: Closed
- **WIZeaz/RAP**: [add Ref and mut Ref edge in Rulf and max_coverage(), improve coverage](https://github.com/WIZeaz/RAP/pull/5) — 2025-04-26 — state: Closed
- **WIZeaz/RAP**: [set max_coverage() as an independent api, not rely on rulf](https://github.com/WIZeaz/RAP/pull/4) — 2025-04-22 — state: Merged
- **WIZeaz/RAP**: [Add Feature and fix bug](https://github.com/WIZeaz/RAP/pull/3) — 2025-04-20 — state: Merged
- **WIZeaz/RAP**: [set api_graph Configurable, but need to improve by adding environment variable and add rulf_algorithm.rs](https://github.com/WIZeaz/RAP/pull/2) — 2025-04-08 — state: Merged
- **WIZeaz/RAP**: [Testgen](https://github.com/WIZeaz/RAP/pull/1) — 2025-04-08 — state: Closed
- **yilin0518/Python**: [复习到元组](https://github.com/yilin0518/Python/pull/1) — 2023-12-11 — state: Merged
<!-- PR-LIST:END -->

## Kernel patches (via email)
- **rust-for-linux**: [rust: configfs: fix release safety documentation](https://lore.kernel.org/all/tencent_9FAFC60382D724C608F0F6BFABFC63BB6707@qq.com/) — 2026-07-08 — state: Merged
- **rust-for-linux**: [rust: miscdevice: fix write_iter safety docs](https://git.kernel.org/pub/scm/linux/kernel/git/gregkh/char-misc.git/commit/?h=char-misc-testing&id=4b17dfb3e22fdccf74839d2fc52362ddc257024e) — 2026-07-07 — state: Merged
- **rust-for-linux**: [rust: io: fix Mmio::from_raw safety docs](https://lore.kernel.org/all/tencent_2E90E794C61B02A9A4BB88BD76B02B976307@qq.com/) — 2026-07-07 — state: Open
- **rust-for-linux**: [rust: drm: fix GEM object pointer safety docs](https://lore.kernel.org/all/alUFzVNxNHlmZbMJ@google.com/) — 2026-07-07 — state: Merged
- **rust-for-linux** [Re: [PATCH v2] rust: dma: remove incorrect safety documentation](https://lore.kernel.org/all/DFARBS5X3XAV.304WNUYV2ES3Q@kernel.org/#r) — state: Merged
- **rust-for-linux** [Re: [PATCH v2] rust: device_id: replace incorrect word in safety documentation](https://lore.kernel.org/all/DFARBV6C1ITF.32UCXF6AYE2A8@kernel.org/) — state: Merged
- **rust-for-linux** [Re: [PATCH v3 RESEND] rust: cpumask: rename methods of Cpumask for clarity and consistency](https://lore.kernel.org/all/aWS9yf1iwWW-O0y6@google.com/) — state: Merged
