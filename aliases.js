var ALIASES = {};
ALIASES["ahash"] = {};
ALIASES["aho_corasick"] = {};
ALIASES["arrayref"] = {};
ALIASES["arrayvec"] = {};
ALIASES["backtrace"] = {};
ALIASES["backtrace_sys"] = {};
ALIASES["base58"] = {};
ALIASES["bip39"] = {};
ALIASES["bitmask"] = {};
ALIASES["bitvec"] = {};
ALIASES["blake2_rfc"] = {};
ALIASES["block_buffer"] = {};
ALIASES["block_padding"] = {};
ALIASES["byte_slice_cast"] = {};
ALIASES["byte_tools"] = {};
ALIASES["byteorder"] = {};
ALIASES["c2_chacha"] = {};
ALIASES["cfg_if"] = {};
ALIASES["clear_on_drop"] = {};
ALIASES["const_random"] = {};
ALIASES["const_random_macro"] = {};
ALIASES["constant_time_eq"] = {};
ALIASES["crunchy"] = {};
ALIASES["crypto_mac"] = {};
ALIASES["curve25519_dalek"] = {};
ALIASES["derive_more"] = {};
ALIASES["digest"] = {};
ALIASES["ed25519_dalek"] = {};
ALIASES["environmental"] = {};
ALIASES["failure"] = {};
ALIASES["failure_derive"] = {};
ALIASES["fake_simd"] = {};
ALIASES["fixed_hash"] = {};
ALIASES["frame_metadata"] = {};
ALIASES["frame_support"] = {"!=":[{'crate':'frame_support','ty':8,'name':'Eq','desc':'Trait for equality comparisons which are equivalence…','p':'frame_support::dispatch'},{'crate':'frame_support','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial…','p':'frame_support::dispatch'}],"{}":[{'crate':'frame_support','ty':8,'name':'Display','desc':'Format trait for an empty format, `{}`.','p':'frame_support::dispatch::fmt'}],"{:?}":[{'crate':'frame_support','ty':8,'name':'Debug','desc':'`?` formatting.','p':'frame_support::dispatch::fmt'}],"==":[{'crate':'frame_support','ty':8,'name':'Eq','desc':'Trait for equality comparisons which are equivalence…','p':'frame_support::dispatch'},{'crate':'frame_support','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial…','p':'frame_support::dispatch'}],};
ALIASES["frame_support_procedural"] = {};
ALIASES["frame_support_procedural_tools"] = {};
ALIASES["frame_support_procedural_tools_derive"] = {};
ALIASES["frame_system"] = {};
ALIASES["generic_array"] = {};
ALIASES["getrandom"] = {};
ALIASES["hash256_std_hasher"] = {};
ALIASES["hash_db"] = {};
ALIASES["hashbrown"] = {};
ALIASES["hex"] = {};
ALIASES["hmac"] = {};
ALIASES["hmac_drbg"] = {};
ALIASES["impl_codec"] = {};
ALIASES["impl_serde"] = {};
ALIASES["impl_trait_for_tuples"] = {};
ALIASES["inflector"] = {};
ALIASES["integer_sqrt"] = {};
ALIASES["keccak"] = {};
ALIASES["lazy_static"] = {};
ALIASES["libc"] = {};
ALIASES["lock_api"] = {};
ALIASES["log"] = {};
ALIASES["malloc_size_of_derive"] = {};
ALIASES["maybe_uninit"] = {};
ALIASES["memchr"] = {};
ALIASES["memory_db"] = {};
ALIASES["memory_units"] = {};
ALIASES["merlin"] = {};
ALIASES["names"] = {};
ALIASES["nodrop"] = {};
ALIASES["num_bigint"] = {};
ALIASES["num_integer"] = {};
ALIASES["num_rational"] = {};
ALIASES["num_traits"] = {};
ALIASES["once_cell"] = {};
ALIASES["opaque_debug"] = {};
ALIASES["parity_scale_codec"] = {};
ALIASES["parity_scale_codec_derive"] = {};
ALIASES["parity_util_mem"] = {};
ALIASES["parity_wasm"] = {};
ALIASES["parking_lot"] = {};
ALIASES["parking_lot_core"] = {};
ALIASES["paste"] = {};
ALIASES["paste_impl"] = {};
ALIASES["pbkdf2"] = {};
ALIASES["ppv_lite86"] = {};
ALIASES["primitive_types"] = {};
ALIASES["proc_macro2"] = {};
ALIASES["proc_macro_crate"] = {};
ALIASES["proc_macro_hack"] = {};
ALIASES["quote"] = {};
ALIASES["rand"] = {};
ALIASES["rand_chacha"] = {};
ALIASES["rand_core"] = {};
ALIASES["rand_hc"] = {};
ALIASES["rand_isaac"] = {};
ALIASES["rand_jitter"] = {};
ALIASES["rand_os"] = {};
ALIASES["rand_pcg"] = {};
ALIASES["rand_xorshift"] = {};
ALIASES["regex"] = {};
ALIASES["regex_syntax"] = {};
ALIASES["rustc_demangle"] = {};
ALIASES["rustc_hex"] = {};
ALIASES["safe_mix"] = {};
ALIASES["schnorrkel"] = {};
ALIASES["scopeguard"] = {};
ALIASES["secp256k1"] = {};
ALIASES["serde"] = {};
ALIASES["serde_derive"] = {};
ALIASES["sha2"] = {};
ALIASES["smallvec"] = {};
ALIASES["sp_application_crypto"] = {};
ALIASES["sp_arithmetic"] = {};
ALIASES["sp_core"] = {};
ALIASES["sp_debug_derive"] = {};
ALIASES["sp_externalities"] = {};
ALIASES["sp_inherents"] = {};
ALIASES["sp_io"] = {};
ALIASES["sp_panic_handler"] = {};
ALIASES["sp_runtime"] = {};
ALIASES["sp_runtime_interface"] = {};
ALIASES["sp_runtime_interface_proc_macro"] = {};
ALIASES["sp_state_machine"] = {};
ALIASES["sp_std"] = {"?":[{'crate':'sp_std','ty':8,'name':'Try','desc':'A trait for customizing the behavior of the `?` operator.','p':'sp_std::ops'}],"*":[{'crate':'sp_std','ty':8,'name':'Mul','desc':'The multiplication operator `*`.','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'DerefMut','desc':'Used for mutable dereferencing operations, like in `*v =…','p':'sp_std::ops'}],">=":[{'crate':'sp_std','ty':8,'name':'Ord','desc':'Trait for types that form a total order.','p':'sp_std::cmp'},{'crate':'sp_std','ty':8,'name':'PartialOrd','desc':'Trait for values that can be compared for a sort-order.','p':'sp_std::cmp'}],"..=":[{'crate':'sp_std','ty':3,'name':'RangeInclusive','desc':'A range bounded inclusively below and above (`start..=end`).','p':'sp_std::ops'},{'crate':'sp_std','ty':3,'name':'RangeToInclusive','desc':'A range only bounded inclusively above (`..=end`).','p':'sp_std::ops'}],"^=":[{'crate':'sp_std','ty':8,'name':'BitXorAssign','desc':'The bitwise XOR assignment operator `^=`.','p':'sp_std::ops'}],">":[{'crate':'sp_std','ty':8,'name':'Ord','desc':'Trait for types that form a total order.','p':'sp_std::cmp'},{'crate':'sp_std','ty':8,'name':'PartialOrd','desc':'Trait for values that can be compared for a sort-order.','p':'sp_std::cmp'}],"<=":[{'crate':'sp_std','ty':8,'name':'Ord','desc':'Trait for types that form a total order.','p':'sp_std::cmp'},{'crate':'sp_std','ty':8,'name':'PartialOrd','desc':'Trait for values that can be compared for a sort-order.','p':'sp_std::cmp'}],"^":[{'crate':'sp_std','ty':8,'name':'BitXor','desc':'The bitwise XOR operator `^`.','p':'sp_std::ops'}],"&=":[{'crate':'sp_std','ty':8,'name':'BitAndAssign','desc':'The bitwise AND assignment operator `&=`.','p':'sp_std::ops'}],"[]":[{'crate':'sp_std','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'sp_std::ops'}],"+":[{'crate':'sp_std','ty':8,'name':'Add','desc':'The addition operator `+`.','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'sp_std::ops'}],"%":[{'crate':'sp_std','ty':8,'name':'Rem','desc':'The remainder operator `%`.','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'sp_std::ops'}],">>=":[{'crate':'sp_std','ty':8,'name':'ShrAssign','desc':'The right shift assignment operator `>>=`.','p':'sp_std::ops'}],"/":[{'crate':'sp_std','ty':8,'name':'Div','desc':'The division operator `/`.','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'sp_std::ops'}],"[":[{'crate':'sp_std','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'sp_std::ops'}],"..":[{'crate':'sp_std','ty':3,'name':'Range','desc':'A (half-open) range bounded inclusively below and…','p':'sp_std::ops'},{'crate':'sp_std','ty':3,'name':'RangeFrom','desc':'A range only bounded inclusively below (`start..`).','p':'sp_std::ops'},{'crate':'sp_std','ty':3,'name':'RangeFull','desc':'An unbounded range (`..`).','p':'sp_std::ops'},{'crate':'sp_std','ty':3,'name':'RangeTo','desc':'A range only bounded exclusively above (`..end`).','p':'sp_std::ops'}],"<<":[{'crate':'sp_std','ty':8,'name':'Shl','desc':'The left shift operator `<<`. Note that because this trait…','p':'sp_std::ops'}],"{}":[{'crate':'sp_std','ty':8,'name':'Display','desc':'Format trait for an empty format, `{}`.','p':'sp_std::fmt'}],"<":[{'crate':'sp_std','ty':8,'name':'Ord','desc':'Trait for types that form a total order.','p':'sp_std::cmp'},{'crate':'sp_std','ty':8,'name':'PartialOrd','desc':'Trait for values that can be compared for a sort-order.','p':'sp_std::cmp'}],"*=":[{'crate':'sp_std','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'sp_std::ops'}],"&":[{'crate':'sp_std','ty':8,'name':'BitAnd','desc':'The bitwise AND operator `&`.','p':'sp_std::ops'}],"|=":[{'crate':'sp_std','ty':8,'name':'BitOrAssign','desc':'The bitwise OR assignment operator `|=`.','p':'sp_std::ops'}],"|":[{'crate':'sp_std','ty':8,'name':'BitOr','desc':'The bitwise OR operator `|`.','p':'sp_std::ops'}],"&*":[{'crate':'sp_std','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'sp_std::ops'}],">>":[{'crate':'sp_std','ty':8,'name':'Shr','desc':'The right shift operator `>>`. Note that because this…','p':'sp_std::ops'}],"-=":[{'crate':'sp_std','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'sp_std::ops'}],"==":[{'crate':'sp_std','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial…','p':'sp_std::cmp'},{'crate':'sp_std','ty':8,'name':'Eq','desc':'Trait for equality comparisons which are equivalence…','p':'sp_std::cmp'},{'crate':'sp_std','ty':8,'name':'Eq','desc':'Trait for equality comparisons which are equivalence…','p':'sp_std::prelude'},{'crate':'sp_std','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial…','p':'sp_std::prelude'}],"!=":[{'crate':'sp_std','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial…','p':'sp_std::cmp'},{'crate':'sp_std','ty':8,'name':'Eq','desc':'Trait for equality comparisons which are equivalence…','p':'sp_std::cmp'},{'crate':'sp_std','ty':8,'name':'Eq','desc':'Trait for equality comparisons which are equivalence…','p':'sp_std::prelude'},{'crate':'sp_std','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial…','p':'sp_std::prelude'}],"-":[{'crate':'sp_std','ty':8,'name':'Sub','desc':'The subtraction operator `-`.','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'Neg','desc':'The unary negation operator `-`.','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'sp_std::ops'}],"+=":[{'crate':'sp_std','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'sp_std::ops'}],"<<=":[{'crate':'sp_std','ty':8,'name':'ShlAssign','desc':'The left shift assignment operator `<<=`.','p':'sp_std::ops'}],"{:?}":[{'crate':'sp_std','ty':8,'name':'Debug','desc':'`?` formatting.','p':'sp_std::fmt'}],"%=":[{'crate':'sp_std','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'sp_std::ops'}],"/=":[{'crate':'sp_std','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'sp_std::ops'}],"]":[{'crate':'sp_std','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'sp_std::ops'},{'crate':'sp_std','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'sp_std::ops'}],};
ALIASES["sp_storage"] = {};
ALIASES["sp_trie"] = {};
ALIASES["sp_version"] = {};
ALIASES["sp_wasm_interface"] = {};
ALIASES["static_assertions"] = {};
ALIASES["substrate_bip39"] = {};
ALIASES["subtle"] = {};
ALIASES["syn"] = {};
ALIASES["synstructure"] = {};
ALIASES["thread_local"] = {};
ALIASES["tiny_keccak"] = {};
ALIASES["toml"] = {};
ALIASES["tracing"] = {};
ALIASES["tracing_attributes"] = {};
ALIASES["tracing_core"] = {};
ALIASES["trie_db"] = {};
ALIASES["trie_root"] = {};
ALIASES["twox_hash"] = {};
ALIASES["typenum"] = {};
ALIASES["uint"] = {};
ALIASES["unicode_xid"] = {};
ALIASES["wasmi"] = {};
ALIASES["wasmi_validation"] = {};
ALIASES["zeroize"] = {};
ALIASES["zeroize_derive"] = {};