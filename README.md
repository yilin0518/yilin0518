I'm Clover, a postgraduate from Fudan University, interested in Rust Programming and AI. Now I'm learning the rust compiler.

I'm active in Rust Community, mainly in Zulip. My open talks are here: 
- [Different output when testing std::ptr::copy by miri](https://rust-lang.zulipchat.com/#narrow/channel/136281-t-opsem/topic/Different.20output.20when.20testing.20std.3A.3Aptr.3A.3Acopy.20by.20miri/with/595183915)
- [Provide the meaning of "Valid" to Understand.](https://rust-lang.zulipchat.com/#narrow/channel/425075-rust-for-linux/topic/Provide.20the.20.20meaning.20of.20.22Valid.22.20to.20Understand.2E/with/539809062)

![Metrics](/github-metrics.svg)

I have opened many issues in many Rust crate repositories:

## Issues
<!-- ISSUE-LIST:START -->
- [Utf32String::insert_utfstr/ insert: Potential Undefined Behaviour find by Miri](https://github.com/VoidStarKat/widestring-rs/issues/51) — 2026-05-10 — 状态: Open
- [Undefined Behaviour find by Miri](https://github.com/Stebalien/str_stack/issues/4) — 2026-05-10 — 状态: Closed
- [Potential Undefined Behavior Reported by Miri](https://github.com/rust-scraper/scraper/issues/316) — 2026-05-09 — 状态: Closed
- [Potential Undefined Behavior Reported by Miri in BytesReader](https://github.com/tafia/quick-protobuf/issues/272) — 2026-04-30 — 状态: Open
- [Potential Undefined Behavior Reported by Miri: Using mem::uninitialized()](https://github.com/tokio-rs/tokio/issues/8055) — 2026-04-16 — 状态: Closed
- [Potential Undefined Behavior Reported by Miri: f_powm1](https://github.com/awxkee/pxfm/issues/88) — 2026-04-16 — 状态: Closed
- [Potential Undefined Behavior Reported by Miri: In exp2m1f_gen and exp10f_gen](https://github.com/awxkee/pxfm/issues/87) — 2026-04-16 — 状态: Closed
- [Potential Undefined Behavior Reported by Miri](https://github.com/ParkMyCar/compact_str/issues/452) — 2026-04-16 — 状态: Open
- [Dnskey::parse bypasses 16-bit RDATA length invariant via new_unchecked](https://github.com/NLnetLabs/domain/issues/621) — 2026-03-11 — 状态: Open
- [FrozenVec::push_get is unsound under reentrant StableDeref implementations](https://github.com/Manishearth/elsa/issues/99) — 2026-03-11 — 状态: Open
- [InputEdit::edit_point accepts internally inconsistent edits without validation](https://github.com/tree-sitter/tree-sitter/issues/5424) — 2026-03-11 — 状态: Closed
- [Soundness issue: AccountInfo::resize can trigger UB from safe code when AccountInfo is created via AccountInfo::new](https://github.com/anza-xyz/solana-sdk/issues/619) — 2026-03-11 — 状态: Closed
- [Soundness issue: Matrix2/Matrix3/Matrix4 swap_columns can trigger UB in Safe Rust when a == b](https://github.com/rustgd/cgmath/issues/565) — 2026-03-11 — 状态: Open
- [Potential soundness issue in loom::lazy_static::Lazy::get returning static reference beyond execution lifetime](https://github.com/tokio-rs/loom/issues/406) — 2026-03-11 — 状态: Open
- [Soundness issue: BytesString::split_off can break UTF-8 invariant and cause UB via safe APIs](https://github.com/dudykr/ddbase/issues/90) — 2026-03-11 — 状态: Open
- [Authorization::value can construct a non-ASCII HeaderValue through Safe Rust](https://github.com/http-rs/http-types/issues/534) — 2026-03-11 — 状态: Open
- [Soundness issue: from_utf8_lossy and from_utf16_lossy can trigger UB from Safe Rust with non-ASCII replacement](https://github.com/unicode-org/icu4x/issues/7766) — 2026-03-11 — 状态: Closed
- [arrow-buffer: Potential Undefined Behavior Reported by Miri](https://github.com/apache/arrow-rs/issues/9289) — 2026-01-28 — 状态: Closed
- [arrow-buffer: Potential Undefined Behavior Reported by Miri](https://github.com/apache/arrow-rs/issues/9287) — 2026-01-28 — 状态: Closed
- [arrow-buffer: Potential Undefined Behavior Reported by Miri](https://github.com/apache/arrow-rs/issues/9286) — 2026-01-28 — 状态: Closed
- [Error emerges when run "cargo run target"](https://github.com/huanli-00/Safe4U-replication/issues/1) — 2026-01-24 — 状态: Closed
- [[BUG REPORT] read_all_from_buf中可能存在指针未对齐导致UB](https://github.com/DragonOS-Community/DragonOS/issues/1539) — 2025-12-22 — 状态: Open
- [[BUG REPORT] unix ring_buffer 未检测参数范围可能导致panic](https://github.com/DragonOS-Community/DragonOS/issues/1536) — 2025-12-22 — 状态: Closed
- [[BUG REPORT] TCP socket listen/close 方法存在资源泄露问题](https://github.com/DragonOS-Community/DragonOS/issues/1520) — 2025-12-20 — 状态: Open
- [[BUG REPORT] TCP listen()函数缺少backlog参数校验，backlog=0导致整数下溢](https://github.com/DragonOS-Community/DragonOS/issues/1519) — 2025-12-20 — 状态: Open
- [Add missing concrete definition for "valid pointer" and reduce redundance in safety comment](https://github.com/yilin0518/tag-rust-for-linux/issues/1) — 2025-12-03 — 状态: Open
- [Potential DeadLock Reported by Miri](https://github.com/smol-rs/parking/issues/29) — 2025-10-10 — 状态: Open
- [Potential DeadLock Reported by Miri](https://github.com/matklad/once_cell/issues/293) — 2025-10-10 — 状态: Open
- [Potential DeadLock Reported by Miri](https://github.com/actix/actix-net/issues/746) — 2025-10-10 — 状态: Closed
- [Potential Undefined Behavior Reported by Miri](https://github.com/bodil/bitmaps/issues/33) — 2025-10-09 — 状态: Open
- [Potential Undefined Behavior Reported by Miri](https://github.com/avitex/rust-aliasable/issues/9) — 2025-10-08 — 状态: Open
- [debug可执行文件时出现段错误](https://github.com/hxuhack/compiler_project/issues/29) — 2024-06-08 — 状态: Open
- [关于spill部分的实现](https://github.com/hxuhack/compiler_project/issues/27) — 2024-06-07 — 状态: Closed
- [lab5关于配置环境问题](https://github.com/hxuhack/compiler_project/issues/26) — 2024-06-06 — 状态: Closed
- [生成ll文件但是链接错误](https://github.com/hxuhack/compiler_project/issues/24) — 2024-05-16 — 状态: Open
- [活跃分析中的succ](https://github.com/hxuhack/compiler_project/issues/23) — 2024-05-14 — 状态: Open
- [关于mem2reg的设计思路的猜测](https://github.com/hxuhack/compiler_project/issues/22) — 2024-05-14 — 状态: Open
- [解析器构造成功但是无法解析文件](https://github.com/hxuhack/compiler_project/issues/6) — 2024-03-14 — 状态: Closed
- [无法使用](https://github.com/ha0z1/New-Bing-Anywhere/issues/217) — 2023-09-11 — 状态: Open
<!-- ISSUE-LIST:END -->

## Pull Requests
<!-- PR-LIST:START -->
- [rustdoc: Prototype implement RFC 3842 with safety::requires attribute](https://github.com/rust-lang/rust/pull/155201) — 2026-04-12 — 状态: Open
- [Support "{Tag}={description}" format, with customized Tag and description](https://github.com/safer-rust/rust/pull/8) — 2026-04-08 — 状态: Closed
- [Injecting safety documentation based on "#[safety::requires()]" attribute and the provided safety spec.](https://github.com/safer-rust/rust/pull/7) — 2026-04-05 — 状态: Merged
- [Expand safety documentation with TOML specification](https://github.com/safer-rust/rust/pull/6) — 2026-04-02 — 状态: Merged
- [Expand safety documentation placeholders using a TOML specification file](https://github.com/safer-rust/rust/pull/5) — 2026-04-02 — 状态: Merged
- [Add functions to normalize JSON IDs and map re-export paths](https://github.com/safer-rust/std-unsafe-doc/pull/18) — 2026-04-01 — 状态: Merged
- [Expand safety documentation with TOML specification](https://github.com/safer-rust/rust/pull/4) — 2026-04-01 — 状态: Merged
- [Add safety-tool component with POC for safety tags](https://github.com/safer-rust/rust/pull/3) — 2026-03-24 — 状态: Merged
- [Add safety-tool component with POC for safety tags](https://github.com/safer-rust/rust/pull/2) — 2026-03-24 — 状态: Closed
- [Add safety-tool as  a new component of rust tools](https://github.com/safer-rust/rust/pull/1) — 2026-03-23 — 状态: Closed
- [Add unsafe API collector and update GitHub Pages workflow](https://github.com/safer-rust/linux-unsafe-doc/pull/1) — 2026-03-04 — 状态: Merged
- [Enhance rustdoc URL generation and include rustc version in output](https://github.com/safer-rust/std-unsafe-doc/pull/17) — 2026-03-04 — 状态: Merged
- [Fix(default alias-analysis): rework SCC path enumeration, SwitchInt constraints, and caching](https://github.com/safer-rust/RAPx/pull/228) — 2026-02-03 — 状态: Merged
- [Add assert in ring_buffer.rs](https://github.com/DragonOS-Community/DragonOS/pull/1537) — 2025-12-22 — 状态: Closed
- [Consistent with current Rust-for-linux repo, add SPs in kernel](https://github.com/Artisan-Lab/tag-rust-for-linux/pull/3) — 2025-12-03 — 状态: Merged
- [Adjust definition of some Rust-for-linux SP](https://github.com/safer-rust/safety-tags/pull/77) — 2025-12-02 — 状态: Merged
- [Add complete Rust-for-linux markdown and toml file ](https://github.com/safer-rust/safety-tags/pull/73) — 2025-11-25 — 状态: Merged
- [Add basic Rust-for-linux safety properties, not completed](https://github.com/safer-rust/safety-tags/pull/71) — 2025-11-17 — 状态: Merged
- [Add re-exported path for type](https://github.com/WIZeaz/RAP/pull/14) — 2025-09-28 — 状态: Merged
- [re-factor code, fix error in outputing re-exported path, now can outp…](https://github.com/WIZeaz/RAP/pull/13) — 2025-09-27 — 状态: Merged
- [For trait impl, generate type::trait_method format](https://github.com/WIZeaz/RAP/pull/12) — 2025-09-26 — 状态: Merged
- [Update visible.path.rs，generate re-exported path both for APIs and methods](https://github.com/WIZeaz/RAP/pull/11) — 2025-09-24 — 状态: Merged
- [Fix error in re-exported function, add ultimate path in output](https://github.com/WIZeaz/RAP/pull/10) — 2025-09-22 — 状态: Closed
- [Generate re-exported path, given def_id and args](https://github.com/WIZeaz/RAP/pull/9) — 2025-09-22 — 状态: Merged
- [Update](https://github.com/LearningOS/rustling-classroom-2025a-rustling-rustling-25A-template/pull/4) — 2025-09-21 — 状态: Open
- [finish all tests](https://github.com/LearningOS/rustling-classroom-2025s-rustling-25S-template/pull/11) — 2025-09-20 — 状态: Open
- [Fix display error in os-sp.md](https://github.com/safer-rust/safety-tags/pull/61) — 2025-09-16 — 状态: Merged
- [Add Rust-for-linux SP docs](https://github.com/safer-rust/safety-tags/pull/57) — 2025-08-19 — 状态: Merged
- [fix error discriptions in std.json, which are already reviewed](https://github.com/safer-rust/safety-tags/pull/38) — 2025-07-27 — 状态: Merged
- [fix error in std.json](https://github.com/safer-rust/safety-tags/pull/33) — 2025-07-25 — 状态: Merged
- [Add get_trimmed_path() in input.rs ](https://github.com/WIZeaz/RAP/pull/8) — 2025-06-23 — 状态: Merged
- [Update 5.2-api.md](https://github.com/safer-rust/RAPx-Book/pull/9) — 2025-04-28 — 状态: Merged
- [delete redundant member in api_dependency graph](https://github.com/WIZeaz/RAP/pull/7) — 2025-04-27 — 状态: Merged
- [delete reduntant member in api_graph, realize main content in RULF](https://github.com/WIZeaz/RAP/pull/6) — 2025-04-27 — 状态: Closed
- [add Ref and mut Ref edge in Rulf and max_coverage(), improve coverage](https://github.com/WIZeaz/RAP/pull/5) — 2025-04-26 — 状态: Closed
- [set max_coverage() as an independent api, not rely on rulf](https://github.com/WIZeaz/RAP/pull/4) — 2025-04-22 — 状态: Merged
- [Add Feature and fix bug](https://github.com/WIZeaz/RAP/pull/3) — 2025-04-20 — 状态: Merged
- [set api_graph Configurable, but need to improve by adding environment variable and add rulf_algorithm.rs](https://github.com/WIZeaz/RAP/pull/2) — 2025-04-08 — 状态: Merged
- [Testgen](https://github.com/WIZeaz/RAP/pull/1) — 2025-04-08 — 状态: Closed
- [复习到元组](https://github.com/yilin0518/Python/pull/1) — 2023-12-11 — 状态: Merged
<!-- PR-LIST:END -->
